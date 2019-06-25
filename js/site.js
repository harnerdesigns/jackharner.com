(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {

          

            if (current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 45);
    };

})(jQuery);


function isVowel(x) {

  var result;

  result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
  return result;
}

var titles = ["Problem Solver", "Photographer", "Graphic Designer", "Cat Lover", "Web Developer", "Entrepreneur"];

var i = 0;

var timeout;

function loop() {
  // console.log(titles[i]);
  if (document.hasFocus()) {
    $('.title').text('').writeText(titles[i]);
    if (isVowel(titles[i].slice(0,1))){
      $("#a").text("an")
    } else {
      $("#a").text("a")
      
    }
    (i < titles.length - 1) ? i++ : i = 0;
    timeout = setTimeout(loop, 3000); // call myself in 3 seconds time if required
  }
};

loop();

$(window).blur(function(){
  // console.table("Blur");

  window.clearTimeout(timeout);
});

$(window).focus(function () {
  // console.table("Focus");

  loop();
});


// var Timer;

// Timer = function(callback, delay) {
//   var remaining, start, timerId;
//   timerId = void 0;
//   start = void 0;
//   remaining = delay;
//   this.pause = function() {
//     window.clearTimeout(timerId);
//     remaining -= new Date - start;
//   };
//   this.resume = function() {
//     start = new Date;
//     window.clearTimeout(timerId);
//     timerId = window.setTimeout(callback, remaining);
//   };
// };  


// var timer = new Timer(loop, 1000); 

// $(window).blur(function(){
// 	timer.pause();
// 	console.log('BLUR');
// });
// $(window).focus(function () {
//   timer.resume();
//   console.log('focus');
// });

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
