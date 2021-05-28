var index = 0;

carouselImages = () => {
	var images = $('.carousel-image');
	for (let i = 0; i < images.length; i++) {
		$('.carousel-image').css('display', 'none');  
	}
	index++;
	if (index > $('.carousel-image').length) {index = 1}
	images[index-1].style.display = 'block';  
	setTimeout(carouselImages, 3000);
}

carouselImages();