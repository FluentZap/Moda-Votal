$(document).ready(function(){
  $('#gate-keeper').modal({backdrop: 'static', keyboard: false});
  $("#age-submit").click(function(){
    console.log ($('#age-varification').is(":checked"));
  });

  // $("#gate-keeper").modal('hide');
  // $("#gate-keeper").effect("shake");

});
