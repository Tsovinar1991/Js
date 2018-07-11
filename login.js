$(document).ready(function () {
    $("input").blur(function () {
        if ($(this).val().length === 0) {
            $(this).css("background-color", "red");
        }
        else {
            $(this).css("background-color", "white");
        }
    });



    $("#button2").click(function(){
        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("password"));
         var dataName =  sessionStorage.getItem("name");
         var dataPassword = sessionStorage.getItem("password");

        if ((dataName === $("#login").val()) &&(dataPassword === $("#password").val())) {
            $(location).attr("href", "logged.html")
        }
        else{
            alert("Please insert correct data.");
        }

    });

});
