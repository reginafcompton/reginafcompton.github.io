$(document).ready(function() {
  $(".panel-1, .panel-2, .panel-3, .panel-4").hide();

  $(".show-more-1").click(function() {
    $(this).fadeOut("fast");
    $(".panel-1").slideToggle("fast");
    $(".show-less-1").fadeIn("fast");
  });
  $(".show-less-1").click(function() {
    $(this).fadeOut("fast");
    $(".panel-1").slideToggle("fast");
    $(".show-more-1").fadeIn("fast");
  });

  $(".show-more-2").click(function() {
    $(this).fadeOut("fast");
    $(".panel-2").slideToggle("fast");
    $(".show-less-2").fadeIn("fast");
  });
  $(".show-less-2").click(function() {
    $(this).fadeOut("fast");
    $(".panel-2").slideToggle("fast");
    $(".show-more-2").fadeIn("fast");
  });

  $(".show-more-3").click(function() {
    $(this).fadeOut("fast");
    $(".panel-3").slideToggle("fast");
    $(".show-less-3").fadeIn("fast");
  });
  $(".show-less-3").click(function() {
    $(this).fadeOut("fast");
    $(".panel-3").slideToggle("fast");
    $(".show-more-3").fadeIn("fast");
  });

  $(".show-more-4").click(function() {
    $(this).fadeOut("fast");
    $(".panel-4").slideToggle("fast");
    $(".show-less-4").fadeIn("fast");
  });
  $(".show-less-4").click(function() {
    $(this).fadeOut("fast");
    $(".panel-4").slideToggle("fast");
    $(".show-more-4").fadeIn("fast");
  });
});

