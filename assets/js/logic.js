$("document").ready(function(){

    //Check off specific todos by clicking
    $("li").on("click", function () {

        $(this).toggleClass("completed");

        // If li is gray -- else turn it gray
        // $(this).css("color") will return the rgb value of the thing clicked
        // if ($(this).css("color") === "rgb(128, 128, 128)") { 
        //     // turn it black
        //     $(this).css({
        //         color: "black",
        //         textDecoration: "none"
        //     });
        // } else {
        //     // turns it gray
        //     $(this).css({
        //         color: "gray",
        //         textDecoration: "line-through"
        //     });
        // }

        // more basic way of altering css, object model is more susinct
        // $(this).css("text-decoration", "line-through");
    });

    // Click on X to delete todo
    $("span").on("click", function () {
        
    });




});