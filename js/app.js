jQuery(document).ready(function($) {
  var group = window.location.search.split('=')[1];
  switchView('instructions'); 
  $('.start').click(function(e) {
    switchView('words');
  });
});

function switchView(name) {
  $('.view').hide();
  $('.view.' + name).show(); 
}

