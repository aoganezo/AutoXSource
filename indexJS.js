$(document).ready(function() {

    $.getJSON( "makes.json", function( data ) {
        var items = [];

        // grab the correct part of the JSON
        var makes = data["makes"];

        // Now we can go through each of the makes and grab the data we need (id and name)
        // and insert them into our items array
        $.each( makes, function( key, val ) {
            items.push( "<option id='" + val["id"] + "'>" + val["name"] + "</option>" );
        });

        // Finally we can insert them into our <select> that has the
        // id="makes"
        $(".makes").append(items.join("" ));
    });

    $( ".makes" ).change(function() {

        $.getJSON( "makes.json", function( data ) {
            var items = [];
            var selectedId = $('.makes').find(':selected').attr('id');
            var makes = data["makes"];
            for (var i = 0; i < makes.length; ++i) {

               if (makes[i]['id'] == selectedId) {

                   $.each( makes[i]['models'], function( key, val ) {
                       items.push( "<option id='" + val["id"] + "'>" + val["name"] + "</option>" );
                   });
                   break;
               }
            }
            $(".models").empty();
            $(".models").append(items.join("" ));
        });
    });
    $( ".makes" ).change(function() {

        $.getJSON( "makes.json", function( data ) {
            var items = [];
            //var selectedId = $('.makes').find(':selected').attr('id');
            var selectedModel = $('makes').find(':selected').attr('years');
            var makes = data["makes"];
            for (var i = 0; i < makes.length; ++i) {
                if (makes[i]['models'] == selectedModel) {

                    $.each( makes[i]['models']['years'], function( key, val ) {
                        items.push( "<option id='" + val["id"] + "'>" + val["name"] + "</option>" );
                    });
                    break;
                }
            }
            $(".years").empty();
            $(".years").append(items.join("" ));
        });
    });
});
