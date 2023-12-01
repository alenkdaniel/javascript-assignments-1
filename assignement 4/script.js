    const images = ['1st.jpg', '2nd.jpg', '3rd.jpg'];
    let currentImage = 0;
    const slideshow = document.getElementById('slideshowImage');
    const prevBtn = document.getElementById('prevbutton');
    const nextBtn = document.getElementById('nextbutton');

    prevBtn.addEventListener('click', function() {
      currentImage = (currentImage - 1 + images.length) % images.length;
      slideshow.src = images[currentImage];
    });

    nextBtn.addEventListener('click', function() {
      currentImage = (currentImage + 1) % images.length;
      slideshow.src = images[currentImage];
    });