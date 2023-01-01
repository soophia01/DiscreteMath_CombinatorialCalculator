$(document).ready(function () {
    $('.interpretation button, .interpretation2 button').click(function (e) { 
      e.preventDefault();
      $(this).parent().find('p').slideToggle()
      $(this).toggleClass('hide').$(this).removeClass('show');
      $(this).toggleClass('show').$(this).removeClass('hide');
    });
});