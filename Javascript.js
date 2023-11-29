  // Slideshow
  let slideIndex = 0;

  function showSlides() {
      let i;
      const slides = document.getElementsByClassName('mySlides');
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 5000); // Change slide every 5 seconds
  }

  // Initial call to start the slideshow
  showSlides();
    // JavaScript to toggle the visibility of the navigation links for small screens
    const toggleBtn = document.getElementById('toggleBtn');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });