jQuery(document).ready(function ($) {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("show");
  });

  // Show/hide the button based on the user's scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll-to-top-btn").fadeIn();
    } else {
      $("#scroll-to-top-btn").fadeOut();
    }
  });

  // Scroll to top when the button is clicked
  $("#scroll-to-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
