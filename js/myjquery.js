$(function(){
    
    var carouselList = $("#carousel ul");
    setInterval(movingSlides, 3000);
    
    function movingSlides() {
        
        setInterval(movingSlides, 3000);
        carouselList.animate({'marginLeft': -400}, 3000, moveFirstSlide);

    };
    
    function moveFirstSlide () {

        var findFirstSlide = carouselList.find("li:first");
        var findLastSlide = carouselList.find("li:last");

        findLastSlide.after(findFirstSlide);
        carouselList.css({'marginLeft': 0});
        
    };
    
});