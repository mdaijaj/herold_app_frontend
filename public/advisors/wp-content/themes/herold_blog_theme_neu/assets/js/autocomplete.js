jQuery(function($) {
    var termTemplate = "<span class='ui-autocomplete-term'>%s</span>";

    $("#form-delete").click(function() {
        $('.ac-search-field').val('');
        // $('.ac-search-field').autocomplete("destroy");
        $('.search-results').empty();
        $('.tut-nav').show();
    });


    $('.ac-search-field').autocomplete({
        minLength: 3,
        search: function(event, ui) {
            $('.search-results').empty();
            $('.tut-nav').hide();
            $('.search-results').html("<div class='loading-wrapper'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>")
        },
        // source: arrBirds,
        source: function(request, response) {
            $.ajax({
                dataType: 'json',
                url: AutocompleteSearch.ajax_url,
                data: {
                    term: request.term,
                    action: 'autocompleteSearch',
                    security: AutocompleteSearch.ajax_nonce,
                },
                success: function(data, ui, item) {
                    var term = $('#input_text').val();


                    $('.search-results').empty();
                    $('.loading-wrapper').hide();
                    
                    if (data.length === 0) {
                        $('.search-results').html('Leider nichts gefunden!')
                    }else{
                        for (const entry of data){

                            var whole_word = entry.content;
                            var current_search_string = document.getElementById("input_text").value;

                            // Highlight current search term.
                            var regex = new RegExp( '(' + current_search_string + ')', 'gi' );
                            whole_word = whole_word.replace(regex, "<b>$1</b>" );

                            
                            $('.search-results').append( '<li><a href="' + entry.link + '">' + entry.label + '<p>' + whole_word + '</p></a></li>' );
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
    $( "input#input_text" ).on('input', function() {
        let input_val = $(this).val();  
        if (!input_val) {
            $('.search-results').empty();
            $('.tut-nav').show();
        }
    });
});