$(document).ready(function () {

  // funzione dropdown
  $(document).ready(function(){
    $(".dropitem").click(function(){
      if ($(this).find(".dropdown").is(":visible")) { // se aperto, chiudi l'altro
        $(".dropdown").hide(); 
      } else {
        $(".dropdown").hide();
        $(this).find(".dropdown").toggle();
      }
    });
  });

});