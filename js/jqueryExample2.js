$(document).ready(function() {

  $(".property-image-title h5").css("width", "10px")
  $("#card1").on('mouseover', function() {
    // $(this).css("height", "20rem")
    $(this).css("background-color", "rgb(67, 67, 78)")
    $("#card1 h5:contains('KTO')").css("color", "#f3eeff")
    $("p").css("color", "rgb(187, 255, 0)")
    $("h1").css("color", "white")
    $('#to*').css("color", "white")
  })
  $("#card1").on('mouseleave', function() {
    // $(this).css("height", "18rem")
    $(this).css("background-color", "#ededed")
    $("h5:contains('KTO')").css("color", "#262535")
    $("p").css("color", "")
    $("h1").css("color", "")
    $('#to*').css("color", "")
  })

  $("#card1").on('click tap touchstart', function() {


    if (($(this).css('width') > '420px')) {
      // $(".property-description").toggleClass("hide")
      // $(this).css("width", "28rem")
      // $(this).css("height", "18rem")
      // $('#clock').toggleClass("hide")
      // $("body").css("box-sizing", "inherit")
      // $("p").css("color", "")
      // $("h1").css("color", "")

    } else {
      $(".property-description").toggleClass("hide")
      $("body").css("box-sizing", "content-box")
      $(".property-card > a").css("width", "inherit")
      $(".property-description").toggleClass("hide")
      $(".property-image-title h5").css("width", "10px")
      $(this).css("width", "800px")
      $(this).css("height", "950px")
      $('#clock').toggleClass("hide")
      $("p").css("color", "white")
      $("h1").css("color", "white")
    }


  })










  $('.property-social-icons').on('click tap touchstart', function() {
    if (($("#card1").css('width') != '420px')) {
      $(".property-description").toggleClass("hide")
      $("#card1").css("width", "28rem")
      $("#card1").css("height", "18rem")
      $('#clock').toggleClass("hide")
      $("body").css("box-sizing", "inherit")
      $("p").css("color", "")
      $("h1").css("color", "")

    }

  })
















});