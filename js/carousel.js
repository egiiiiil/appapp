var index = 0;

carouselImages = () => {
  var images = document.getElementsByClassName('carousel-image');
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';  
  }
  index++;
  if (index > images.length) {index = 1}
  images[index-1].style.display = 'block';  
  setTimeout(carouselImages, 3000);
} 

carouselImages();
