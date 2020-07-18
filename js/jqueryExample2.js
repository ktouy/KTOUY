$(document).ready(function () {
    $(".property-image-title h5").css("width", "10px")






    //Mouse OVer
    $("#card1").on('mouseover', function () {
        $(this).css("background-color", "#262731")
        $("#card1 h5:contains('KTO')").css("color", "#f3eeff")
        $("p").css("color", "rgb(187, 255, 0)")
        $("input#to").css("border", "1px solid rgb(187, 255, 0)")
        $("h1").css("color", "white")
        $('#to*').css("color", "white")
    })

    //Mouse Leave
    $("#card1").on('mouseleave', function () {
        $(this).css("background-color", "#ededed")
        $("h5:contains('KTO')").css("color", "#262535")
        $("input#to").css("border", "1px solid black")
        $("p").css("color", "")
        $("h1").css("color", "")
        $('#to*').css("color", "")
    })

    $('span#timesHMS').on("mouseover", function(){
        $(this).css("background", "#262535")
        $(this).addClass("card  grey darken-4")
    })
    $('span#timesHMS').on("mouseleave", function () {
        $(this).css("background", "")
        $(this).removeClass("card  grey darken-4")
    })

    //Click
    $("#card1").on('click', function () {
        if (!$(this).has('cardUp')) {
            $(this).toggleClass('cardUp')
            // ($(this).css('width') > '420px')
            // $(".property-description").toggleClass("hide")
            // $(this).css("width", "28rem")
            // $(this).css("height", "18rem")
            // $('#clock').toggleClass("hide")
            // $("body").css("box-sizing", "inherit")
            // $("p").css("color", "")
            // $("h1").css("color", "")
        } else {
            $('span.thumb').addClass("hide")
            $(".property-description").toggleClass("hide")
            $("body").css("box-sizing", "content-box")
            $(".property-card > a").css("width", "inherit")
            $(".property-image").css("width", "auto")
            $(".property-description").toggleClass("hide")
            $(".property-image-title h5").css("width", "10px")

            $(this).toggleClass('cardUp')
            // $(this).css("width", "70vh" )
            // $(this).css("height", "80vh")

            $('#clock').toggleClass("hide")
            $("p").css("color", "white")
            $("h1").css("color", "white")
        }
    })

    // $("[data-clickable='true']").on('click', function () {
    //     console.log('wazaaa')
    // });

    //Click box
    $('.property-social-icons').on('click', function () {
        if (!$("#clock").hasClass('hide')) {
            $(".property-image").css("width", "")
            $(".property-description").toggleClass("hide")

            $('#card1').toggleClass('cardUp')
            // $("#card1").css("width", "")
            // $("#card1").css("height", "")

            $('#clock').toggleClass("hide")
            $("body").css("box-sizing", "inherit")
            $("p").css("color", "")
            $("h1").css("color", "")
        }
    })


});
