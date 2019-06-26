
$(function () {
    TweenMax.set("#scrollIndicator", { opacity: 0, onComplete: bounce });
    TweenMax.set("#followMeBanner", { opacity: 0, scale: 0, onComplete: zoomIn });
    TweenMax.set(".introduction", {opacity:0, onComplete: introSlide});

    console.log("Animations Loading");
    

});  


function bounce(){

    TweenMax.to('#scrollIndicator', 0.5, { opacity: 1, delay: 2 });
    TweenMax.to("#scrollIndicator", 1, { y: 10, repeat: -1, yoyo: true, delay: 2.25});
}


function zoomIn(){

    TweenMax.to("#followMeBanner", 1, {opacity: 1, scale: 1, delay: 2.5});
}


function introSlide(){

    TweenMax.to('.introduction', 1, {opacity: 1}); 
    TweenMax.staggerFrom(".introduction h1, .introduction h2, .introduction h3", 1, {x: -50, opacity: 0, delay: 1}, 0.25, loop);
}