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




var titles = ["Web Designer", "Photographer", "Graphic Designer", "Cat Lover"];

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
  arrows: false,
  rows: 0,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
