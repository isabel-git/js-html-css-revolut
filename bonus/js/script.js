$(document).ready(function () {

  var aperto = false;

  // funzione dropdown
  $(".dropitem").click(function () {
    if ($(this).find(".dropdown").is(":visible")) { // se aperto, chiudi l'altro
      $(".dropdown").hide();
    } else {
      $(".dropdown").hide();
      $(this).find(".dropdown").toggle();
    }
  });

  // mostra hamburgher-menu
  $("#ham").click(function () {
    if (aperto === false) {
      // $('.hamburger-menu').show(); // mostra il menu hamburger al click del ham
      $(".hamburger-menu").addClass("active"); // aggiunge la classe active al menu ham
      aperto = true;
    }
  });

  // nasconde hamburgher-menu
  $(".close").click(function () {
    if (aperto === true) {
      // $('.hamburger-menu').hide(); // nasconde il menu hamburger al click di .close
      $(".hamburger-menu").removeClass("active"); // toglie la classe active
      aperto = false;
    }
  });

});
