/*Առաջադրանք՝

Ստեղծել գրանցվելու համար նախատեսված դաշտեր՝
	Անուն
Ազգանուն
էլ․հասցե
Ծածկագիր
դաշտերով։
Տեսքային մասը թողնում եմ Ձեր ստեղծագործ մոտեցմանը ։
Պետք է ունենանք ամենահասարակ ֆունկցիոնալը պարտադիր է՝
որ լրացված լինեն բոլոր դաշտերը։
Եթե մեր օգտագործողը որևէ դաշտ մտել է և առանց լրացնելու փորձում է դուրս գալ պետք է
ամբողջ input֊ը՝ շրջանակը (որը որ լրացված չէ) կարմիր գույն ստանա, դուրս գալուց հետո:
    Եվ եթե բոլոր դաշտերը լրացված են save կոճակը սեղմելուց հետո ամբողջ դաշտերը հավաքում ենք մեկ օբյեկտի մեջ համապատասխան
    key->value ներով։ */


$(document).ready(function () {
    $("input").blur(function () {
        if ($(this).val().length === 0) {
            $(this).css("background-color", "red");
        }
        else {
            $(this).css("background-color", "white");

            if (($("#password").val() !== $("#confpassword").val()) && ($("#password").val() !== "" && $("#confpassword").val() !== "" )) {
                $("#password").css("background-color", "red");
                $("#confpassword").css("background-color", "red");
            }
            else {
                $("#password").css("background-color", "white");
                $("#confpassword").css("background-color", "white");
            }
        }
    });

    var obj = {};
    $("#button").click(function () {

        var fields = $('input');

        for (var i = 0; i < fields.length; i++) {
            if ($(fields[i]).val().length !== 0 && $(fields[i]).val() !== " " ) {
                var name = $("#name").val();
                var l_name = $("#l_name").val();
                var email = $("#email").val();
                var password = $("#password").val();
                var confpassword = $("#confpassword").val();
                obj.name = name;
                obj.lastname = l_name;
                obj.email = email;
                obj.password = password;
                obj.confpassword = confpassword;


                sessionStorage.setItem("name", name);
                sessionStorage.setItem("password", password);

            }

            else {
                alert("Fill all fields.");
                $(location).attr("href", "index.html");

            }
        }

        // if(password === confpassword) {
        //     $(location).attr("href", "login.html");
        // }
        // else{
        //     $(location).attr("href", "index.html");
        // }
        // if(name.length > 20 && (isNaN(parseFloat(name)) && isFinit
        //
        //
        // e(name))) {
        //     $(location).attr("href", "login.html");
        // }
        // else{
        //     $(location).attr("href", "index.html");
        // }
        // if(l_name.length > 20 && (isNaN(parseFloat(l_name)) && isFinite(l_name))) {
        //     $(location).attr("href", "login.html");
        // }
        // else{
        //     $(location).attr("href", "index.html");
        // }




    });
    console.log(obj);

});




