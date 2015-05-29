$(document).ready(function() {
  var url = window.location.href;
  var tab = url.split('/'); 
 
 $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
 }); 
});
