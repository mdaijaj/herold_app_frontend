jQuery(function($) {
    var termTemplate = "<span class='ui-autocomplete-term'>%s</span>";
    document.onclick= function(event) {
        $('.sidebar-menu').removeClass('active');
        $('.search-results').html('');
        $('.ac-search-field').removeClass('active');
    };

    $('.ac-search-field').on('keyup', function() {
        if($(this).val() == '') {
            $('.sidebar-menu').removeClass('active');
            $('.ac-search-field').removeClass('active');
            $('.search-results').empty();
            $('.loading-wrapper').hide();
        }
    });

    $('.ac-search-field').keydown(function(e) {
        if(e.which == 13) { return false; }
    });

    $('.ac-search-field').autocomplete({
        minLength: 3,
        search: function(event, ui) {
            $('.search-results').empty();
            $('.tut-nav').hide();
            $('.search-results').html("<div class='loading-wrapper'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>")
            $('.sidebar-menu').addClass('active');
            $('.ac-search-field').addClass('active');
        },
        // source: arrBirds,
        source: function(request, response) {
            $.ajax({
                dataType: 'json',
                url: AutocompleteGlossarSearch.ajax_url,
                data: {
                    term: request.term,
                    action: 'autocompleteGlossarSearch',
                    security: AutocompleteGlossarSearch.ajax_nonce,
                },
                success: function(data, ui, item) {
                    var term = $('#input_text').val();
                
                    $('.search-results').empty();
                    $('.loading-wrapper').hide();

                    if(term == '') {
                        $('.sidebar-menu').removeClass('active');
                        $('.ac-search-field').removeClass('active');
                        $('.search-results').empty();
                        $('.loading-wrapper').hide();
                    }
                    let sidebarMenu = document.getElementsByClassName("sidebar-menu");
                    if (sidebarMenu[0].classList.contains('active')) {
                        if (data.length === 0) {
                            $('.search-results').html('<li>Leider nichts gefunden!</li>')
                        } else{
                            for (const entry of data){
    
                                var whole_word = entry.content;
                                var current_search_string = document.getElementById("input_text").value;
    
                                // Highlight current search term.
                                var regex = new RegExp( '(' + current_search_string + ')', 'gi' );
                                whole_word = whole_word.replace(regex, "<b>$1</b>" );
    
                                var ausgabe_label = entry.label;
                                console.log(ausgabe_label);
    
                                var result = ausgabe_label.replace(current_search_string, "<span>"+current_search_string+"</span>");
                                console.log(result);
                                
                                $('.search-results').append( '<li><a href="' + entry.link + '"><img class="search_result_img" src="' + site.theme_path + '/img/lexikon.svg">' + result + '</a></li>' );
                            }
                        }
                    }  
                },
                
                
            });
        },
        select: function(event, ui) {
            window.location.href = ui.item.link;
        }
    })

    // if input gets deleted, empty input field and show default nav
    if ($('#input_text').length > 0) {
        document.getElementById('input_text').onkeyup = function(event) {
            if (this.length === 0) {
            $('.search-results').empty();
            $('.tut-nav').show();
            }
        }
      }
      

});