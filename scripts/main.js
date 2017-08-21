$(window).load(function() {

  $(".support-team-block__team-donate-btn-1").on("click", function(e){
    $(".donate-popup-1").addClass("active-popup");
    $("body").append('<div class="fade"></div>');
  })

  $(".popup-cls-1").on("click", function(e){
    $(".donate-popup-1").removeClass("active-popup");
    $(".fade").remove();
  })

  $(".support-team-block__team-donate-btn-2").on("click", function(e){
    $(".donate-popup-2").addClass("active-popup");
    $("body").append('<div class="fade"></div>');
  })

  $(".popup-cls-2").on("click", function(e){
    $(".donate-popup-2").removeClass("active-popup");
    $(".fade").remove();
  })

});


