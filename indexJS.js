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
            console.log(makes);
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

    $( ".models" ).change(function() {

        $.getJSON( "makes.json", function( data ) {
            var items = [];
            var selectedId = $('.makes').find(':selected').attr('id');
            var makes = data["makes"];
            for (var i = 0; i < makes.length; ++i) {
                if (makes[i]['id'] == selectedId) {
                    var models = makes[i]['models'];
                    var selectedModel = $('.models').find(':selected').attr('id');
                    console.log(models);
                    for(var x = 0; x < models.length; ++x) {
                        console.log("x: "+ x);
                        if (models[x]['id'] == selectedModel) {
                            $.each( models[x]['years'], function( key, val ) {
                                items.push( "<option id='" + val["id"] + "'>" + val["year"] + "</option>" );
                            });
                            break;
                        }
                    }

                }
            }
            $(".years").empty();
            $(".years").append(items.join("" ));
        });
    });

    /*
    $( ".models" ).change(function() {

        $.getJSON( "makes.json", function( data ) {
            var items = [];
            console.log(1);
            var selectedId = $('.makes').find(':selected').attr('id');
            console.log(2);
            var selectedModel = $('.years').find(':selected').attr('id');
            console.log(3);
            console.log(data["makes"]);
            console.log(data["makes"]["models"]);

            var models = data["makes"]["models"];
            console.log(4);
            console.log(models);
            console.log(5);
            for (var i = 0; i < models.length; ++i) {
                if (models[i]['models'] == selectedModel) {
                    console.log(6);
                    $.each(models[i]['models']['years'], function( key, val ) {
                        items.push( "<option id='" + val["id"] + "'>" + val["name"] + "</option>" );
                    });
                    console.log(7);
                    break;
                }
            }
            $(".years").empty();
            $(".years").append(items.join("" ));
        });
    });*/
});
