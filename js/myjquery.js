$(function(){
    
    var carouselList = $("#carousel ul");
    setInterval(movingSlides, 5000);
    
    function movingSlides() {
        carouselList.animate({'marginLeft': -400}, 2000, moveFirstSlide);
    };
    
    function moveFirstSlide () {

        var findFirstSlide = carouselList.find("li:first");
        var findLastSlide = carouselList.find("li:last");

        findLastSlide.after(findFirstSlide);
        checkDot();
        carouselList.css({'marginLeft': 0});
        
    };
    
    function moveLastSlide () {
        var findFirstSlide = carouselList.find("li:first");
        var findLastSlide = carouselList.find("li:last");

        findFirstSlide.before(findLastSlide);
        checkDot();
        carouselList.css({'marginLeft': -400});
    };
        
    
    var arrowRight = $('.fa-arrow-right');
    var arrowLeft = $('.fa-arrow-left');
    
    arrowRight.on("click", function() {
        
        clearInterval(movingSlides);        
        carouselList.stop();        

        carouselList.animate({'marginLeft':-400}, moveFirstSlide);
    });
    
    arrowLeft.on("click", function() {
        
        clearInterval(movingSlides);        
        carouselList.stop();
        
        carouselList.animate({'marginLeft':0}, moveLastSlide);
    });
    
    var buttonslide = $("div[class^='dot-'");
    var photos = $("li");
    
    buttonslide.click(function() {
        var self = $(this).index();
        var clickPhoto = photos[self];
        
        carouselList.stop();        
        
        var findFirstSlide = carouselList.find("li:first");
        findFirstSlide.before(clickPhoto);
        checkDot();
        carouselList.css({'marginLeft': 0});
    });
    
    function checkDot() {
        var first = $("li:first");
        switch(first[0]) {

            case photos[0]:
                $("div[class^='dot-']").css("background-color", "white");
                $(".dot-1").css("background-color", "green");
                break;

            case photos[1]:
                $("div[class^='dot-']").css("background-color", "white");
                $(".dot-2").css("background-color", "green");
                break;

            case photos[2]:
                $("div[class^='dot-']").css("background-color", "white");
                $(".dot-3").css("background-color", "green");
                break;

            case photos[3]:
                $("div[class^='dot-']").css("background-color", "white");
                $(".dot-4").css("background-color", "green");
                break;

            case photos[4]:
                $("div[class^='dot-']").css("background-color", "white");
                $(".dot-5").css("background-color", "green");
                break;
        }
    }
    checkDot();
});

     
