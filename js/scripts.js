var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*var tags = ['sup', 'sub', 'span'], tag = '';


$(document).on({
  'mouseenter': function() {
    var back = ["#ffb821","#00ffa9","#b600ff"];
    var rand = back[Math.floor(Math.random() *      back.length)];
    var back1 = ["#fc4d25","blue","#ef0298"];
    var rand1 = back1[Math.floor(Math.random() *      back.length)];
    tag = tags[ Math.floor(Math.random()*(3)) ];
    $(this).replaceWith($('<' + tag + '>' + $(this)[0].innerText + '</' + tag + '>'));

     $('sub').css('color', rand);
     $('sup').css('color', rand1);
  }
}, ".wrapper > *");
