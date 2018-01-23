$(function(){
    
    var carouselList = $("#carousel ul");
    setInterval(movingSlides, 5000);
    
    function movingSlides() {
        
        carouselList.animate({'marginLeft': -400}, 5000, moveFirstSlide);
    };
    
    function moveFirstSlide () {

        var findFirstSlide = carouselList.find("li:first");
        var findLastSlide = carouselList.find("li:last");

        findLastSlide.after(findFirstSlide);
        carouselList.css({'marginLeft': 0});
        
    };
    
    function moveLastSlide () {
        var findFirstSlide = carouselList.find("li:first");
        var findLastSlide = carouselList.find("li:last");

        findFirstSlide.before(findLastSlide);
        carouselList.css({'marginLeft': -400});
    };
        
    
    var arrowRight = $('.fa-arrow-right');
    var arrowLeft = $('.fa-arrow-left');
    
    arrowRight.on("click", function() {
        
        carouselList.stop();        

        carouselList.animate({'marginLeft':-400}, moveFirstSlide);
    });
    
    arrowLeft.on("click", function() {
        
        carouselList.stop(false, true);
        
        moveLastSlide();
        carouselList.animate({'marginLeft':0});
    });
    
    var buttonslide = $("div[class^='dot-'");
    var photos = $("li");
    
    buttonslide.click(function() {
        var self = $(this).index();
        var clickPhoto = photos[self];
        
        carouselList.stop();        
        
        var findFirstSlide = carouselList.find("li:first");
        findFirstSlide.before(clickPhoto);
        carouselList.css({'marginLeft': 0});
    });
});

     