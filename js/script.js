$(document).ready(function () {

  // funzione dropdown
  $(document).ready(function(){
    $(".dropitem").click(function(){
      if ($(this).find(".dropdown").is(":visible")) {
        $(".dropdown").hide();
      } else {
        $(".dropdown").hide();
        $(this).find(".dropdown").toggle();
      }
    });
  });

});