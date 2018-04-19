$("document").ready(function(){

    //Check off specific todos by clicking
    $("ul").on("click", "li", function () { 
        /* We have to use the ul parent so that when other
            li elements are added the can inherit the same on 
            click listeners. We are actually only listening to
            the li, but the parent needs the actual listener for 
            things to work */

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
    $("ul").on("click", "span", function (event) {
        $(this).parent().fadeOut(500, function name() { //callback function waiting .5sec
            $(this).remove();
        });
        event.stopPropagation(); //jQuery method, stops bubbling up issue
    });

    //listener for the text input
    $("input[type='text']").keypress(function (event) {
        if (event.which === 13) { // enter keycode
            // grabbing input from the text box and clear text box
            var todoText = $(this).val();
            $(this).val(""); 
            // create a new li and add to ul uing append
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");    
        }
    })

    $("#toggleForm").on("click", function() {
        $("input[type='text']").fadeToggle();
    });



});