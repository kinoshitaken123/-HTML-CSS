$(function () {
  $('.menu-trigger').on('click', function (event) {
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});