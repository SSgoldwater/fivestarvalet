$(document).ready(function() {
  $('li').click(function(e) {
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
  });
});
