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
    var answers = $('.test textarea').val().replace(/, /g, ' ').replace(/,/g, ' ').split(/[\n ]/);
    var correct = [];
    var wrong = [];
    for(var idx=0; idx<answers.length; idx++) {
      if ($.inArray(answers[idx].toLowerCase(), words) != -1) {
        correct.push(answers[idx]); 
      } else {
        wrong.push(answers[idx]);
      }
    }
    $('.num-correct').text(correct.length);
    $('.correct span').text(correct.join(' '));
    $('.incorrect span').text(wrong.join(' '));
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

