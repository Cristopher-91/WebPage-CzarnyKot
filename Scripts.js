jQuery(document).ready(function() {
  
  var btn = $('#button');


  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });

});
