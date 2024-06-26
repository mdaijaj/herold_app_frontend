/**
 * jQuery Plugin: Photo Multiupload in der Userzone
 */

(function($, window, document, undefined) {
	var pluginName = 'photoMultiUpload', defaults = {};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this._init();
	};

	Plugin.prototype = {
		_init : function() {
			var that = this;
			this.$pu = $(this.element); // div-photoDialog
			this.areaSelect; // object for selecting a rectangular area of an image
			this.sid = "";
			this.pictureId = "";
			this.index = 0;
			this.appendTo = this.options.appendTo ? this.options.appendTo: false; // html-element
			this.type = this.options.type ? this.options.type : false; // boundary-type(PRODUCT,PHOTO,USER_PHOTO,EPROOF_FEEDBACK,PROFILE,TELL_AUSTRIA,REVIEW_PHOTO)
			this.crop = this.options.crop === false ? false : true; // boolean true/false (use crop yes/no)
			this.selectionWidth = this.options.selectionWidth ? this.options.selectionWidth: 310; // aspectRatio
			this.selectionHeight = this.options.selectionHeight ? this.options.selectionHeight: 220; // aspectRatio
			this.imageGridWidth = this.options.imageGridWidth ? this.options.imageGridWidth: 215; // width of image in preview grid
			this.imageGridHeight = this.options.imageGridHeight ? this.options.imageGridHeight: 153;  // height of image in preview grid
			this.huzUrl = this.options.huzUrl ? this.options.huzUrl : ""; // huz base url
			this.description = this.options.description ? this.options.description : false; // boolean true/ false (show title- and textfield)
			this.singleFieldTitle = this.options.singleFieldTitle ? this.options.singleFieldTitle : false,
				this.save2Object = this.options.save2Object ? this.options.save2Object : false; // function
			this.originalImage = ""; // stores the original uploaded image
			this.$fileUploadField = this.options.mulitUploadField ? this.options.mulitUploadField : $('#multipleFileUploadField'); // input type=field
			this.$imageCrop = $("#imageCrop");
			this.$photoMultiUploadDialog = $(".photoMultiUploadDialog");
			this.$preview_photo = this.$photoMultiUploadDialog.find(".preview_photo");
			this.$multiUploadFiles = $(".multipleUploadFiles");
			this.$multifileUpload = $(".multiFileUpload");
			this.$multifileUploadContent = $(".multiFileUploadContent");
			this.$uploadStatus = $(".multiFileUpload .uploadstatus"); // error status after fileupload
			this.$multifileUploadProgress = $(".multiFileUpload .progress");
			this.cropFormData = [];
			this.cropDataGrid = [];
			this.areaSelectState = [];
			this.lockSubmit = false;
			this.countFiles = 0;
			this.totalCountFiles = 0;
			this.fileuploadErrorMsg = "";
			this.maxNumberOfFiles = this.options.maxNumberOfFiles ? this.options.maxNumberOfFiles : 0,	// 0 = unlimited
				this.currentCountFiles = this.options.currentCountFiles ? this.options.currentCountFiles : false; 	// review: if photos exists

			var classNoCrop = "";
			if (this.crop === false) {
				classNoCrop = " noCropImage";
			}

			// if selection has a square size
			if (this.selectionHeight == this.selectionWidth) {
				this.$photoMultiUploadDialog.find(".photo_preview").addClass("square");
			} else {
				this.$photoMultiUploadDialog.find(".photo_preview").css({width : this.selectionWidth, height: this.selectionHeight});
			}

			this.$multifileUpload.data("inprogress", false);

			//init multi fileupload field
			this.$fileUploadField.fileupload({
				url: this.huzUrl+"/uploadTempImageMultiple.do",
				formData: {type: "PHOTO"},
				dataType: 'json',
				change : function(e, data) {
					if(!that._fileLimitCheck({"numFiles": data.files.length})) {
						return false;
					} else {
						that._uploadFilesSelect(data);
					}
				},
				paste : function(e, data) {
					that._uploadFilesSelect(data);
				},
				drop : function(e, data) {
					that._uploadFilesSelect(data);
				},
				dragover : function(e, data) {
					e.preventDefault();
					that._uploadFilesSelect(data);
				},
				start: function(e) {
					var $prog = $(".progress");
					that.$multifileUpload.data("inprogress", true);
					that.fileuploadErrorMsg = "";
					if(that.$multifileUploadContent.is(":visible") == false) {
						$prog.show();
						that.$multifileUploadContent.show();
					}
					if($("#submit_multiple_fotos").is(":visible") == true) {
						that._disableFileuploadField();
					}
					$('#submitReview').removeClass('btn-highlight').addClass('disabled');
				},
				always : function() {
					that.countFiles++;
					if(that.totalCountFiles == that.countFiles) { // all files uploaded
						if(that.fileuploadErrorMsg != "") {
							that.$uploadStatus.removeClass('loading success').addClass('error').html(that.fileuploadErrorMsg + '<br/><span class="info">Sie können die angezeigten Fotos in der Fotovorschau bearbeiten und speichern.</span>').show();
						}
						$('#submitReview').removeClass('disabled').addClass('btn-highlight');
					}
				},
				done: function(e, data) {
					var error = data._response.jqXHR.error().responseJSON.REVResponse.errors;
					that.$multifileUpload.data("inprogress", false);
					if (typeof error == "undefined") {
						var url = data.result.tempImageUrl;

						if(!that.crop && !that.description) {
							if(that.singleFieldTitle) {
								$('<li class="singleFieldTitle"><figure data-pictureId="'+data.result.tempImageId+'" class="prev'+data.result.tempImageId+'"><span class="icon-x previewPhotoDelete" aria-hidden="true" title="Foto löschen"></span><div class="preview"><img src="'+url+'?t='+Date.now()+'" class="img'+data.result.tempImageId+'" /></div><span class="titleText"></span><div class="error"></div><input type="text" name="singleFieldTitle" placeholder="Hier ihre Bildbeschreibung...."><div></figure></li>').appendTo('.multipleUploadFiles');
							} else {
								$('<li><figure data-pictureId="'+data.result.tempImageId+'" class="prev'+data.result.tempImageId+'"><span class="icon-x  previewPhotoDelete" aria-hidden="true" title="Foto löschen"></span><div class="preview"><img src="'+url+'?t='+Date.now()+'" class="img'+data.result.tempImageId+'" /></div><span class="titleText"></span><div class="error"></div></figure></li>').appendTo('.multipleUploadFiles');
							}
						} else {
							$('<li><figure data-pictureId="'+data.result.tempImageId+'" class="prev'+data.result.tempImageId+'"><span class="icon-x  previewPhotoDelete" aria-hidden="true" title="Foto löschen"></span><div class="preview"><img src="'+url+'?t='+Date.now()+'" class="img'+data.result.tempImageId+'" /></div><span class="titleText"></span><div class="error"></div><button type="button" class="btn btn-default editCropImage">Foto bearbeiten, Titel und Text vergeben</button></figure></li>').appendTo('.multipleUploadFiles');
						}
						that._initCropFormData();
					}
					else {
						for(var e in error) {
							that.fileuploadErrorMsg += 'Bei dem Foto <span class="filename">"'+encodeURI(data.files[0].name)+'"</span> ist ein Fehler aufgetreten: ' + error[e] +'<br/>';
						}
					}
				},
				progressall: function(e, data) {
					var progress = parseInt(data.loaded / data.total * 100, 10);
					that.$multifileUploadProgress.show().find(".progress-bar").css('width', progress + '%').find(".progress-percent").text(progress + '%');
				},
				fail: function(e, data) {
					var error = data._response.jqXHR.error().responseJSON.REVResponse.errors;
					that.$multifileUpload.data("inprogress", false);
					if(typeof error != "undefined") {
						for(var e in error) {
							that.fileuploadErrorMsg += 'Bei dem Foto <span class="filename">"'+encodeURI(data.files[0].name)+'"</span> ist ein Fehler aufgetreten: ' + error[e] +'<br/>';
						}
						if(that.fileuploadErrorMsg != "") {
							that.$uploadStatus.removeClass('loading hidden success').addClass('error').html(that.fileuploadErrorMsg).show();
						}
					}
				}
			}).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');

			// init photo overlay
			this.$pu.dialog({
				title : 'Foto editieren',
				autoOpen : false,
				stack : false,
				dialogClass : "cropPhoto" + classNoCrop,
				closeText : '',
				close : function() {
					that._closeDialog();
				},
				width : 'auto',
				modal : true,
				resizable : false,
				position: { my: "center", at: "center", of: window, collision: "flipfit", within: window},
				show : {
					effect : "fade",
					duration : 200
				},
				hide : {
					effect : "fade",
					duration : 200
				}
			});

			// append to a html-element
			if (this.appendTo !== false) {
				this.$pu.dialog("option", "appendTo", this.appendTo);
			}

			// init areaSelect
			this.$imageCrop.load(function() {
				if (that.$imageCrop.attr("src") != that.huzUrl + "/img/imageplaceholder.jpg") {
					$("#submit_photo_upload").fadeIn(2000);
					if (that.crop === true) {
						that.areaSelect = that.$imageCrop.imgAreaSelect({
							onInit : function(img, selection) {
								that._preview_image(img, selection, false);
							},
							onSelectChange : function(img, selection) {
								that._preview_image(img, selection, false);
							},
							resizable : true,
							movable : true,
							parent : "div.cropPhoto",
							persistent : true,
							instance : true,
							minWidth : 31,
							minHeight : 22,
							handles: true
						});
					}
					that._initPreview();
				}
			});

			// button "neues bild hinzugügen"
			$("body").on("click", ".editCropImage", function() {
				that._openDialog(this);
			});

			// overlay button "foto hinzufügen"
			$("body").on("click", "#addCropData", function() {
				that._collectCropData(this);
				that.$pu.dialog("close");
			});

			// preview grid button "fotos hinzufügen"
			$("body").on("click", "#submit_multiple_fotos", function() {
				if(that.lockSubmit == true) {
					return false;
				}
				that.lockSubmit = true;
				that._cropImages();
			});

			// preview grid link "delete image"
			$("body").on("click", ".previewPhotoDelete", function() {
				var pictureId = $(this).parents("figure").data("pictureid");
				that._removeImage(pictureId);
				$.ajax({
					url: that.huzUrl+"/removeImage.do?index="+pictureId,
					type: "POST",
					cache: false,
					error: function(object, status, error) {
						alert("Es ist ein Fehler aufgetreten.");
					}
				});
			});

			// button cancel photoupload
			$(".cropPhoto ").find("#cancelMultiFileUpload, .ui-dialog-titlebar-close").on("click", function() {
				that.$pu.dialog("close");
			});

			$("#cancel_mulitple_photo_upload").on("click", function() {
				that._resetSession();
				that._cancelMulitplePhotoPreview();
			});

			$('.file_input_multiple_button').mouseover(function() {
				$(this).addClass('file_input_multiple_button_hover');
			});

			$('#multipleFileUploadField').on("click", function() {
				that.lockSubmit = false;
				that._resetSession();
				that._cancelMulitplePhotoPreview();
			});

			$("body").on("blur", "input[name='singleFieldTitle']", function() {
				var $this = $(this),
					picId = $this.parents("figure").data("pictureid");

				that.cropFormData[picId].title = $this.val();
				$this.parents("form").find("input[name='boundaries']").val(JSON.stringify(that.cropFormData));
				//console.log(that.cropFormData);
			});

		},

		_fileLimitCheck: function(args) {

			var numFiles = args.numFiles ? args.numFiles : false;

			if(this.maxNumberOfFiles != 0) {
				if(this.currentCountFiles != false) {
					if(numFiles > (this.maxNumberOfFiles - this.currentCountFiles) ) {
						alert("Sie können maximal " + (this.maxNumberOfFiles - this.currentCountFiles) + " Foto auswählen!");
						return false;
					} else {
						return true;
					}
				} else {
					if(numFiles > this.maxNumberOfFiles) {
						alert("Sie können maximal " + this.maxNumberOfFiles + " Foto auswählen!");
						return false;
					} else {
						return true;
					}
				}
			} else {
				return true;
			}
		},

		_uploadFilesSelect: function(data) {
			this.totalCountFiles = 0;
			this.countFiles = 0;
			if(typeof data.files != "undefined") {
				this.totalCountFiles = data.files.length;
			}
		},

		_progressCounter: function() {
			var that = this;
			that.complete == true;
			$(".multiFileUpload .status").append('<span class="counter"></span>');
			(function funfunc(){
				if(that.complete == false) {
					$.ajax({
						url: that.huzUrl+"/getProgress.json",
						type: "GET",
						cache: false,
						success: function(response, status, object)	{
							$(".multiFileUpload .counter").html(response.current+ " von "+response.sum+" Fotos sind gespeichert");
						},
						error: function(object, status, error) {
							console.log("error");
						}
					});
					setTimeout(funfunc,500);
				}
			})();
		},

		_getIndex: function() {
			for(var i=0; i < this.cropFormData.length; i++) {
				if(this.cropFormData[i].id == this.pictureId) {
					return i;
				}
			}
		},

		/*
		 * delete image from preview grid
		 */
		_removeImage: function(id) {
			this.cropFormData.splice(id,1);
			this.cropDataGrid.splice(id,1);
			this.areaSelectState.splice(id,1);
			this.$multiUploadFiles.find(".prev"+id).parents("li").remove();

			if($("#rating-form").find("input[name='boundaries']").length > 0) {
				$("#rating-form").find("input[name='boundaries']").val(JSON.stringify(this.cropFormData));
			}

			if(this.cropFormData.length == 0) {
				this.$multifileUploadContent.hide();
				this.$multifileUploadProgress.hide().find(".progress-bar").removeAttr("style").find(".progress-percent").html("");
				this._enableFileuploadField();
			}
		},

		_cancelMulitplePhotoPreview: function() {
			this._resetCropFormData();
			this.$multifileUploadProgress.hide().find(".progress-bar").removeAttr("style").find(".progress-percent").html("");
			$(".multiFileUpload .status").removeClass("success error loading").html("");
			this.$uploadStatus.removeClass('success error').hide();
			this.$multiUploadFiles.empty();
			this.$multifileUploadContent.hide();
			this._enableFileuploadField();
		},

		_disableFileuploadField: function() {
			$(".multipleFileUploadFieldContent").hide();
		},

		_enableFileuploadField: function() {
			$(".multipleFileUploadFieldContent").show();
		},

		/*
		 * Open the fileupload dialog
		 */
		_openDialog: function(elem) {

			this.pictureId = $(elem).parents("figure").data("pictureid");
			this.index = this._getIndex();
			var imageUrl = this.huzUrl+"/getTempImage.do?id="+this.pictureId+"&t="+Date.now(),
				$iElem = this.$photoMultiUploadDialog.find(".inputelement"),
				$input,
				$inputElems = $(".cropPhoto").find(".inputelement");

			this.$imageCrop.attr("src", imageUrl);
			this.$preview_photo.attr("src", imageUrl);
			this._originalImageData(imageUrl);
			if (this.description === true && $iElem.children().length == 0) {
				$input = $('<label for="title">Titel: </label><input type="text" id="title" name="title" maxlength="200" /><label for="text">Beschreibung:</label><textarea name="text" id="text" maxlength="500"></textarea>');
				$iElem.append($input).show();
				$("#text", $iElem).counter();
			}
			$inputElems.find("input[name='title']").val(this.cropFormData[this.index].title);
			$inputElems.find("textarea[name='text']").val(this.cropFormData[this.index].text);
			this.$pu.dialog("open");
		},

		/*
		 * close the fileupload dialog
		 */
		_closeDialog: function(newImage) {

			if (this.areaSelect != null) {
				this.$imageCrop.imgAreaSelect({
					remove : true
				});
			}
			this.$imageCrop.attr("src", this.huzUrl + "/img/imageplaceholder.jpg");
			this.$preview_photo.attr("src", this.huzUrl + "/img/empty.gif");
			this.$photoMultiUploadDialog.find("input[name='title'], textarea[name='text']").val("");
		},

		/*
		 * assign title and text to preview grid
		 */
		_collectCropData: function(elem) {
			this.cropFormData[this.index].title = this.$photoMultiUploadDialog.find("input[name='title']").val();
			this.cropFormData[this.index].text = this.$photoMultiUploadDialog.find("textarea[name='text']").val();
			$(".prev"+this.pictureId+" .titleText").html('<figcaption class="ellipse title" title="'+this.cropFormData[this.index].title+'">'+this.cropFormData[this.index].title+'</figcaption><p class="description ellips" title="'+this.cropFormData[this.index].text+'">'+this.cropFormData[this.index].text+'</p>');
			this._preview_image(this.$imageCrop, "", true);

			this.areaSelectState[this.index] = {"x1" : "", "y1" : "", "x2" : "", "y2" : ""};
			this.areaSelectState[this.index].x1 =  this.cropFormData[this.index].x / this._ratio().x;
			this.areaSelectState[this.index].y1 =  this.cropFormData[this.index].y / this._ratio().y;
			this.areaSelectState[this.index].x2 =  (this.cropFormData[this.index].x + this.cropFormData[this.index].width) / this._ratio().x;
			this.areaSelectState[this.index].y2 =  (this.cropFormData[this.index].y + this.cropFormData[this.index].height) / this._ratio().y;
		},

		/*
		 * reset image session
		 */
		_resetCropFormData: function() {
			this.cropFormData = [];
			this.cropDataGrid = [];
			this.areaSelectState = [];
		},

		/*
		 * reset session in BE
		 */
		_resetSession: function() {
			this._resetCropFormData();
			$.ajax({
				url: this.huzUrl+"/resetMultipleFileUpload.do",
				type: "POST",
				cache: false,
				success: function(response, status, object)	{
					if($(".multipleUploadFiles li").length > 0) {
						$(".multipleUploadFiles").empty();
					}
				},
				error: function(object, status, error) {
					alert("Es ist ein Fehler aufgetreten.");
				}
			});
		},

		/*
		 * initalize cropFormData - object
		 */
		_initCropFormData: function() {
			var $elems = this.$multiUploadFiles.find(".editCropImage"),
				$ratingForm = $("#rating-form"),
				$boundaries = $ratingForm.find("input[name='boundaries']");

			if($elems.length == 0) {
				$elems =this.$multiUploadFiles.find(".previewPhotoDelete");
			}
			for(var i=0; i<$elems.length; i++) {
				var pId = $($elems[i]).parents("figure").data("pictureid");
				if(typeof this.cropFormData[pId] == "undefined") {
					this.cropFormData[pId] = {"id" : pId, "type" : this.type, "x" : "", "y" : "", "width" : "", "height" : "", "title" : "", "text" : ""};
				}
			}

			if($boundaries.length > 0) {
				$boundaries.val(JSON.stringify(this.cropFormData));
			} else {
				$("#rating-form").append( $('<input />')
					.attr('type', 'hidden')
					.attr('name', 'boundaries')
					.attr('value',  JSON.stringify(this.cropFormData)));
			}
		},

		/*
		 * save crop-data (and title/Text) and get the cropped images
		 */
		_cropImages: function() {
			if (this.save2Object != false && typeof this.save2Object == "function") {
				this.save2Object(this);
			}
		},

		/*
		 * init the selection area
		 */
		_initPreview: function() {
			var origDim = this._getOriginalImageDimension(),
				uploadImgWidth,
				uploadImgHeight,
				areaSelectWidth,
				areaSelectHeight,
				ratio;
			if (this.crop === true) {
				uploadImgWidth = this.$imageCrop.width();
				uploadImgHeight = this.$imageCrop.height();
				ratio = this.selectionWidth / this.selectionHeight;

				areaSelectWidth = uploadImgWidth * 0.9;
				areaSelectHeight = uploadImgHeight * 0.9;

				if(typeof this.areaSelectState[this.index] != "undefined") {
					this.areaSelect.setSelection(this.areaSelectState[this.index].x1, this.areaSelectState[this.index].y1, this.areaSelectState[this.index].x2, this.areaSelectState[this.index].y2, false);
				} else {
					this.areaSelect.setSelection(0, 0, areaSelectWidth, areaSelectHeight, false);
				}

				this.areaSelect.setOptions({show : true});
				this.areaSelect.update();
			} else {
				this.cropFormData[this.index].x = 0;
				this.cropFormData[this.index].y = 0;
				this.cropFormData[this.index].width = origDim.width;
				this.cropFormData[this.index].height = origDim.height;
			}
		},

		/*
		 * update preview image on selection change
		 */
		_preview_image: function(img, selection, gridView) {

			if(typeof this.cropDataGrid[this.index] != "undefined" && gridView == true){
				selection = this.cropDataGrid[this.index];
			}

			if(gridView == false) {
				this.cropDataGrid[this.index] = selection;
			}

			var Sw = selection.width,	// Selection width 
				Sx = selection.x1, // Selection offset x
				Sh = selection.height, // Selection height
				Sy = selection.y1,	// Selection offset y
				UIw = this.$imageCrop.width(), // Upload image width 
				UIh = this.$imageCrop.height(),	// Upload image height
				PFw = gridView === true ? this.imageGridWidth : this.selectionWidth, // Preview frame width 310
				PFh = gridView === true ? this.imageGridHeight : this.selectionHeight, // Preview frame height 220
				scale, // scale
				PIw,	// Preview image width 
				PIh,	// Preview image heigth
				Ml, // Margin left
				Mt, // Margin top
				Ct, // Clip top
				Cr, // Clip right
				Cb, // Clip bottom
				Cl, // Clip left
				$previewImg = gridView === true ?  $(".preview .img"+this.pictureId) : this.$preview_photo;

			if(Sw >= Sh) {
				scale = PFw / (Sw || 1);
				if( (((Sy + Sh) * scale) - (Sy * scale)) > PFh ) {
					scale = PFh / Sh;
				}
			} else {
				scale = PFh / (Sh || 1);
			}

			PIw = Math.round( UIw * scale );
			PIh = Math.round( UIh * scale );
			Ml = Math.round( (((Sw/2 + Sx) * scale) - PFw/2) * -1 );
			Mt = Math.round( (((Sh/2 + Sy) * scale) - PFh/2) * -1 );
			Cl = Math.round( Sx * scale );
			Cr = Math.round( (Sx + Sw) * scale );
			Ct = Math.round( Sy * scale );
			Cb = Math.round( (Sy + Sh) * scale );

			$previewImg.css({ 	width : PIw + 'px',
				height : PIh + 'px',
				left : Ml + 'px',
				top : Mt + 'px',
				clip: 'rect('+Ct+'px, '+Cr+'px, '+Cb+'px, '+Cl+'px)'
			});
			if(gridView === false) {
				this._updateCropForm(this._ratio(), selection);
			}
		},

		/*
		 * store the orignal uploaded image
		 */
		_originalImageData: function(src) {
			this.originalImage = new Image();
			this.originalImage.src = src;
		},

		/*
		 * get the dimensions of the original uploaded image
		 */
		_getOriginalImageDimension: function() {
			return {
				"width" : this.originalImage.width,
				"height" : this.originalImage.height
			};
		},

		/*
		 * Update cropping data in form
		 */
		_updateCropForm: function(ratio, selection) {
			this.cropFormData[this.index].x = Math.floor(ratio.x * selection.x1);
			this.cropFormData[this.index].y = Math.floor(ratio.y * selection.y1);
			this.cropFormData[this.index].width = Math.floor(ratio.x * selection.width);
			this.cropFormData[this.index].height = Math.floor(ratio.y * selection.height);
		},

		/*
		 * return the ratio
		 */
		_ratio: function() {
			var origDim = this._getOriginalImageDimension();
			return {
				"x" : origDim.width / this.$imageCrop.width(),
				"y" : origDim.height / this.$imageCrop.height()
			};
		},


// === public methods ==============================================================================================

		getCropFormData: function() {
			return this.cropFormData;
		},

		setCurrentCountFiles: function(count) {
			this.currentCountFiles = count;
		}
	};

	$.fn[pluginName] = function(options) {

		var args = arguments, retval = "";

		if (options === undefined || typeof options === 'object') {
			return this.each(function() {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			this.each(function() {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					if (options === 'getCropFormData') {
						retval = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
						return retval;
					} else {
						instance[options].apply(instance, Array.prototype.slice.call(args, 1));
					}
				}
			});
			return retval;
		}
	};

})(jQuery, window, document);

$(window).resize(function() {
	// recenter dialog on resize
	$(".photoMultiUploadDialog").dialog("option", "position", { my: "center", at: "center", of: window, collision: "flipfit", within: window});
});