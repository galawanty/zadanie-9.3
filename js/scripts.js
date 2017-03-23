$(function(){
	var carouselList = $("#carousel ul");
    
    setInterval(changeSlide,3000);
  	function changeSlide(){
    	carouselList
      		.animate({marginLeft:-500}, 500, placeFirstSlideAfterLast);
  };
  function placeFirstSlideAfterLast(){
  	carouselList
    	.find("li:last")
    	.after(carouselList.find("li:first"));
    carouselList
      	.css({marginLeft:0});
  };
});