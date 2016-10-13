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
    $("#makes").append(items.join("" ));
});