// time in seconds for the test
var COUNTDOWN = 60;

jQuery(document).ready(function($) {
  var group = window.location.search.split('=')[1];
  if (group === '1') {
    // default
  } else if (group === '2') {
    $('.reward span').text('50p'); 
  } else {
    $('.reward').hide();
  }
  switchView('instructions'); 
  $('.start').click(function(e) {
    switchView('words');
    countdown(COUNTDOWN, function() {
      switchView('test');
    });
  });

  var words = $('.words').find('pre').text().split('\n');
  $('.done').click(function(e) {
    var answers = $('.test textarea').val().replace(', ', ' ').replace(',', ' ').split(/[\n ]/);
    var numCorrect = 0;
    for(var idx=0; idx<answers.length; idx++) {
      if ($.inArray(answers[idx].toLowerCase(), words) != -1) {
        numCorrect += 1;
      }
    }
    $('.num-correct').text(numCorrect);
    switchView('results');
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

