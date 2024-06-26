/**
 * jQuery Plugin: Validation of form fields
 * @doc https://docs.herold.at/display/DEV/Frontend+Dokumentation
 */
(function($, window, document, undefined) {
	var pluginName = "validate",
		defaults = {
			messagePosition: "right",
			submitOnError: false,
			template: {
				right:
					'<div class="validate-msg"><div class="arrow arrow-left"></div><div class="inner"></div>',
				bottom:
					'<div class="validate-msg-up"><div class="arrow arrow-up"></div><div class="inner"></div>'
			},
			messages: {
				required: "Bitte füllen Sie dieses Feld aus!",
				chars: "Bitte geben Sie mindestens {chars} Zeichen ein!",
				url: "Bitte geben Sie eine URL inkl. http:// bzw. https:// ein!",
				email: "Bitte geben Sie eine gültige E-Mail-Adresse ein!",
				integer: "Bitte geben Sie eine gültige Zahl ein!",
				float: "Bitte geben Sie eine gültige Zahl ein (zB. 9,90)!",
				minmax: "Bitte geben Sie einen Wert zwischen {min} und {max} ein!",
				date: "Bitte geben Sie ein gültiges Datum ein (zB. 27.01.1999)!",
				equals: "Die beiden Felder stimmen nicht überein!"
			},
			ajaxConfig: {
				url: { url: "validateUrl.do?url=" },
				password: { url: "validatePassword.do?password=" },
				login: { url: "validateNewLogin.do?login=" }
			}
		};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			var that = this;

			this.$form = $(this.element);
			this.checks = {}; // a hash to collect checks
			this.bubbles = {}; // a hash to collect the info/error bubbles

			// deactivate browser built-in validation
			this.$form.attr("novalidate", "novalidate");

			// do not allow submit if submitOnError is false and errors occur
			if (this.options.submitOnError === false) {
				this.$form.on("submit", function(ev) {
					that.$form.find(":focus").trigger("blur");

					that.clearChecks("backend");

					var totalErrors = that.displayErrors();

					if (totalErrors > 0) {
						ev.preventDefault();
						ev.stopImmediatePropagation();
						alert("Bitte beheben Sie die rot markierten Eingabefehler!");
					}
				});
			}

			// check form field onblur
			this.$form.on("blur", "input,textarea,select", function() {
				var $input = $(this),
					fieldType = $input.attr("type");

				// frontend checks
				if ($input.attr("required")) {
					that.checkRequired($input);
				}

				if ($input.attr("data-minlength")) {
					that.checkLength($input);
				}

				if ($input.attr("data-equals")) {
					that.checkEquals($input);
				}

				if ($input.hasClass("validate-integer")) {
					that.checkInteger($input);
				} else if ($input.hasClass("validate-float")) {
					that.checkFloat($input);
				} else if ($input.hasClass("validate-date")) {
					that.checkDate($input);
				} else if (fieldType === "email") {
					that.checkEmail($input);
				}

				that.displayErrors();
				that.$form.addClass("was-validated");

				// AJAX checks
				//if (fieldType === 'password' && !$input.hasClass('novalidate-password')) {
				//	that.checkAjax($input);
				//} else if (fieldType === 'url' || $input.hasClass('validate-login')) {
				//	that.checkAjax($input);
				//}
			});
		},

		clearChecks: function(checkName) {
			for (var fieldName in this.checks) {
				if (typeof this.checks[fieldName][checkName] !== "undefined") {
					delete this.checks[fieldName][checkName];
				}
			}
		},

		/**
		 * Fehler aus dem Backend über das REVResponse verarbeiten
		 * @param json Das json Objekt aus dem AJAX Call
		 * @returns bool Ob der Response erfolgreich war (true) oder nicht (false)
		 */
		parseResponse: function(json) {
			if (!json.hasOwnProperty("REVResponse")) {
				return;
			}

			var REVResponse = json.REVResponse;

			// Speichern war erfolgreich
			if (REVResponse.success) {
				this.checks = [];
				this.displayErrors();
				return true;
			}

			// Fehlermeldungen pro Feld anzeigen
			for (var fieldName in REVResponse.errors) {
				this.setCheck(
					"backend",
					fieldName,
					REVResponse.errors[fieldName],
					false
				);
			}

			this.displayErrors();
			return false;
		},

		/**
		 * Fügt ein Check-Ergebnis zu einem Feld hinzu
		 * @param type
		 * @param fieldName
		 * @param msg
		 * @param passed
		 */
		setCheck: function(type, fieldName, msg, passed) {
			if (typeof this.checks[fieldName] == "undefined") {
				this.checks[fieldName] = {};
			}

			// backend check clears frontend checks, frontend check replaces backend check
			if (type === "backend") {
				this.checks[fieldName] = [];
			} else {
				delete this.checks[fieldName]["backend"];
			}

			this.checks[fieldName][type] = { passed: passed, message: msg };
		},

		/**
		 * Check e-mail address via AJAX
		 * @param $input
		 */
		checkEmail: function($input) {
			var fieldName = $input.attr("name"),
				fieldValue = $input.val(),
				that = this,
				url = baseUrlReview + "/validateEmail.do?eMail=";

			// check passed if field is empty
			if (fieldValue === "") {
				that.setCheck("email", fieldName, null, true);
				return;
			}

			// check email syntax and unique and exclude current logged in user
			if ($input.data("uid")) {
				url =
					baseUrlReview +
					"/validateExistingEmail.do?accountKey=" +
					$input.data("uid") +
					"&eMail=";
			} else if ($input.hasClass("validate-unique")) {
				url = baseUrlReview + "/validateNewEmail.do?eMail=";
			}

			$.ajax({
				url: url + fieldValue,
				success: function(json) {
					if (json.REVResponse) {
						if (json.REVResponse.success) {
							that.setCheck("email", fieldName, null, true);
						} else {
							that.setCheck(
								"email",
								fieldName,
								json.REVResponse.errors["email"],
								false
							);
						}

						that.displayErrors();
					}
				}
			});
		},

		/**
		 * Check via AJAX (url, password, username)
		 */
		checkAjax: function($input) {
			// remove breaks and spaces at start and end
			$input.val($.trim($input.val()));

			var fieldName = $input.attr("name"),
				fieldType = $input.attr("type"),
				fieldValue = $input.val(),
				checkName = fieldType,
				that = this,
				url = null;

			if (checkName === "password" && $input.hasClass("novalidate-password")) {
				return;
			}

			if ($input.hasClass("validate-login")) {
				checkName = "login";

				if ($input.data("uid")) {
					url =
						"validateExistingLogin.do?accountKey=" +
						$input.data("uid") +
						"&login=";
				} else {
					url = that.options.ajaxConfig[checkName].url;
				}
			} else {
				url = that.options.ajaxConfig[checkName].url;
			}

			// do not check empty field
			if (fieldValue === "") {
				that.setCheck(checkName, fieldName, null, true);
				return;
			}

			// add protocol to links
			if (
				checkName === "url" &&
				fieldValue.indexOf("http://") !== 0 &&
				fieldValue.indexOf("https://") !== 0
			) {
				fieldValue = "http://" + fieldValue;
				$input.val(fieldValue);
			}

			$.ajax({
				type: "GET",
				url: url + encodeURIComponent(fieldValue),
				success: function(json) {
					if (json.REVResponse) {
						if (json.REVResponse.success) {
							that.setCheck(checkName, fieldName, null, true);
						} else {
							that.setCheck(
								checkName,
								fieldName,
								json.REVResponse.errors[checkName],
								false
							);
						}

						that.displayErrors();
					}
				}
			});
		},

		/**
		 * Check minimum length of textfields
		 * @param $input
		 */
		checkLength: function($input) {
			// remove breaks and spaces at start and end
			$input.val($.trim($input.val()));

			var fieldName = $input.attr("name"),
				minLength = parseInt($input.attr("data-minlength")),
				valLength = $input.val().length;

			if ($input.val() === "" || valLength >= minLength) {
				this.setCheck("chars", fieldName, null, true);
			} else {
				this.setCheck(
					"chars",
					fieldName,
					this.options.messages["chars"].replace("{chars}", minLength),
					false
				);

				// minlength overwrites required message if not passed
				this.setCheck("required", fieldName, null, true);
			}
		},

		/**
		 * Check vor valid positive Integer - leading zeros allowed
		 * @param $input
		 */
		checkInteger: function($input) {
			// remove breaks and spaces at start and end
			$input.val($.trim($input.val()));

			var fieldName = $input.attr("name"),
				intRegex = /^\d+$/;

			if ($input.val() === "" || intRegex.test($input.val())) {
				this.setCheck("integer", fieldName, null, true);
			} else {
				this.setCheck(
					"integer",
					fieldName,
					this.options.messages["integer"],
					false
				);
			}
		},

		/**
		 * Check vor valid positive float without leading zeros
		 * @param $input
		 */
		checkFloat: function($input) {
			var fieldName = $input.attr("name"),
				floatRegex = /^([0-9]\d{0}|[1-9]\d*)(?:\,\d{1,2})?$/;

			if ($input.val() === "" || floatRegex.test($input.val())) {
				this.setCheck("float", fieldName, null, true);
			} else {
				this.setCheck(
					"float",
					fieldName,
					this.options.messages["float"],
					false
				);
			}
		},

		/**
		 * Check vor valid date in format DD.MM.YYYY
		 * @param $input
		 */
		checkDate: function($input) {
			var fieldName = $input.attr("name"),
				dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;

			if ($input.val() === "" || dateRegex.test($input.val())) {
				this.setCheck("date", fieldName, null, true);
			} else {
				this.setCheck("date", fieldName, this.options.messages["date"], false);
			}
		},

		/**
		 * Check required field value
		 * @param $input
		 */
		checkRequired: function($input) {
			var fieldName = $input.attr("name"),
				fieldValue = $input.val(),
				fieldType = $input[0].type.toLowerCase(),
				nodeName = $input[0].nodeName.toLowerCase(),
				passed = false;

			// could be an array for select-multiple or a string
			if (nodeName === "select" && fieldValue.length > 0) {
				passed = true;

				// radio or checkbox must be checked
			} else if (
				(fieldType === "checkbox" || fieldType === "radio") &&
				this.$form
					.find('input[name="' + $input.attr("name") + '"]')
					.filter(":checked").length > 0
			) {
				passed = true;
			} else if ($.trim(fieldValue).length > 0) {
				passed = true;
			}

			if (passed === true) {
				this.setCheck("required", fieldName, null, true);
			} else {
				this.setCheck(
					"required",
					fieldName,
					this.options.messages["required"],
					false
				);
			}
		},

		/**
		 * Check if field value matches another fields value
		 * @param $input
		 */
		checkEquals: function($input) {
			var fieldName = $input.attr("name"),
				equals = $input.attr("data-equals");

			if ($input.val() === this.$form.find('[name="' + equals + '"]').val()) {
				this.setCheck("equals", fieldName, null, true);
			} else {
				this.setCheck(
					"equals",
					fieldName,
					this.options.messages["equals"],
					false
				);

				// equals overwrites required message if not passed
				this.setCheck("required", fieldName, null, true);
			}
		},

		/**
		 * Displays the error messages
		 * @returns {int} Total numbers of errors displayed
		 */
		displayErrors: function() {
			var totalErrors = 0;

			for (var fieldName in this.checks) {
				var $input = this.$form
						.find("input,textarea,select")
						.filter('[name="' + fieldName + '"]'),
					messages = new Array();

				// do not show bubbles for hidden fields
				//if ($input.attr('type') === 'hidden') { return; }

				// create a hidden bubble div
				if (typeof this.bubbles[fieldName] == "undefined") {
					var $div = $input.closest(".rowh").find(".validate-pos");

					if ($div.length == 0) {
						$div = $input.closest(".form-group").find(".validate-pos");
					}

					if ($div.length == 0) {
						$div = $input.closest(".row").find(".validate-pos");
					}

					if ($div.length == 0) {
						$div = $input.closest("[class^=col]").next();
					}

					// custom position for error message
					if ($div.length == 0) {
						$div = $("div.validate-pos").filter('[rel="' + fieldName + '"]');
					}

					this.bubbles[fieldName] = $(
						this.options.template[this.options.messagePosition]
					)
						.hide()
						.appendTo($div);
				}

				for (var checkName in this.checks[fieldName]) {
					if (this.checks[fieldName][checkName].passed === false) {
						messages.push(this.checks[fieldName][checkName].message);
					}
				}

				// if any error message needs to be displayed
				if (messages.length > 0) {
					totalErrors += messages.length;

					this.bubbles[fieldName]
						.find("div.inner")
						.html(messages.join("<br/>"));
					this.bubbles[fieldName].fadeIn();

					$input.removeClass("validate-success").addClass("validate-error");
				} else {
					this.bubbles[fieldName].fadeOut();
					$input.removeClass("validate-error").addClass("validate-success");
				}
			}

			return totalErrors;
		}
	};

	// prevent against multiple instantiations
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new Plugin(this, options));
			}
		});
	};
})(jQuery, window, document);
