$(document).ready(function () {
  $(".project__item").slice(0, 6).show();
  $(".load").click(function (e) {
    e.preventDefault();
    $(".project__item").slice(6, 10).slideToggle();
    $(this).text($(this).text() === "Load Less" ? "Load More" : "Load Less");
  });
});
