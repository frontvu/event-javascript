$(function () {

    function hideError() {
        $("#loginerror").hide()
    }

    function login() {
        var password = "pass"
        var enteredpassword = $("#passwordinput").prop("value")

        if (password === enteredpassword) {
            $("#loginerror").hide()
            $("#main").show()
            $("#login").hide()
        } else {
            $("#loginerror").show()
        }
    }

    function fadeOut() {
        var image = $(this)

        image.fadeTo("fast", 0.5)
        image.css("border-color","orange")
    }

    function fadeIn() {
        var image = $(this)

        image.fadeTo("fast", 1)
        image.css("border-color","white")
    }

    $("#passwordinput").focus(hideError)

    $("#loginbutton").click(login)

    $(".images img").mouseover(fadeOut)

    $(".images img").mouseout(fadeIn)
})
