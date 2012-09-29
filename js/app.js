jQuery(document).ready(function($) {
  var group = window.location.search.split('=')[1];
  switchView('instructions'); 
  $('.start').click(function(e) {
    switchView('words');
    countdown(60, function() {
      alert('done');
    });
  });
});

function switchView(name) {
  $('.view').hide();
  $('.view.' + name).show(); 
}

// count = time in s
// cb = callback
function countdown(count, cb) {
  var counter = setInterval(timer, 1000);
  function timer()
  {
    count=count-1;
    if (count <= 0)
    {
      clearInterval(counter);
      cb(); 
    }
    $('.countdown').text(count);
  }
}

