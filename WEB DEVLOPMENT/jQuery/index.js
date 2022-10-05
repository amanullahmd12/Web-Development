
$("h1").addClass("change");

$(document).keypress(function(event){
      $("h1").text(event.key);

});
