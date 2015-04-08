$(document).ready(function() {

  $( "li" ).hover(

    function() {
      $( this ).append('<span>hello</span>');
    }, function() {
      $( this ).find('span:last').remove();
    });

});
