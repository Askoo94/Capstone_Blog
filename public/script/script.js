// Handle optionGroup input
let selectElement = $("#mySelect");

$("#mySelect").on("change", function(event) {

    let value = selectElement[0].value;

    console.log(selectElement[0].value);

    switch (value) {

        // Make a post
        case "1":
            $("#form1").show();
            $("#form2").hide();
            break;

        // Modify a post
        case "2":
            $("#form1").show();
            $("#form2").hide();
            break;

        // Delete a post  
        case "3":
            $("#form1").hide();
            $("#form2").show();
            break;    
    
        default:
            break;
    }
});
