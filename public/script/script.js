// Handle optionGroup input
$("#mySelect").on("change", function(event) {

    let selectElement = $("#mySelect");

    let value = selectElement[0].value;

    console.log(selectElement[0].value);
    console.log("J'aime manger !");

    switch (value) {

        // Make a post
        case "1":
            $("#form1").show();
            $("#form3").hide();
            $("#form2").hide();
            break;

        // Modify a post
        case "2":
            $("#form3").show();
            $("#form1").hide();
            $("#form2").hide();
            break;

        // Delete a post  
        case "3":
            $("#form1").hide();
            $("#form3").hide();
            $("#form2").show();
            break;    
    
        default:
            break;
    }
});
