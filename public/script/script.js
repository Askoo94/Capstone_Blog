// Handle optionGroup input
$("#mySelect").on("change", function(event) {

    let selectElement = $("#mySelect");

    let value = selectElement[0].value;

    //console.log(selectElement[0].value);

    switch (value) {

        // Make a post
        case "1":
            $("form").attr("action", "/submit");
            $("#image").prop("disabled", false);
            $("#story").prop("disabled", false);

            break;

        // Modify a post
        case "2":
            $("form").attr("action", "/put");
            $("#image").prop("disabled", false);
            $("#story").prop("disabled", false);

            break;

        // Delete a post  
        case "3":
            $("form").attr("action", "/delete");
            $("#image").prop("disabled", true);
            $("#story").prop("disabled", true);

            break;    
    
        default:
            break;
    } 
});






