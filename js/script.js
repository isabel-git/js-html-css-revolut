$(document).ready(function () {

  // finzione per creare dropdown menù che viene fuori al click
  $('.dropitem').click(function () {

    $('.dropdown').removeClass("active"); // se aperto, chiudi l'altro

    $(this).find('.dropdown').toggleClass('active');

  });

});