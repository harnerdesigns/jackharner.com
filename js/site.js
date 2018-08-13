(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {

            if (current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 20);
    };

})(jQuery);




var titles = ["Web Designer", "Photographer", "Graphic Designer", "Digital Marketer", "Cat Lover"];

var i = 0;

function loop() {

    $('.title').text('').writeText(titles[i]);
    (i < titles.length - 1) ? i++ : i = 0;

    console.log (i +", "+titles.length)


    setTimeout(loop, 3000); // call myself in 3 seconds time if required
};


var Timer;

Timer = function(callback, delay) {
  var remaining, start, timerId;
  timerId = void 0;
  start = void 0;
  remaining = delay;
  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date - start;
  };
  this.resume = function() {
    start = new Date;
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };
  this.resume();
};  


timer = new Timer(loop, 1000); 

$(window).blur(function(){
	timer.pause();
	console.log('BLUR');
});

$(".things").slick({
        slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 0
      });




$("#contact").submit(function(e) {


    var form = $(this);
    var url = "https://forms.hubspot.com/uploads/form/v2/4822117/8d194daf-8f67-4470-aff0-cf4865d36277"

    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(),
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});