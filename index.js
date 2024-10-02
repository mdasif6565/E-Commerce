

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn-2');
const menu = document.getElementById('menu-ul');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

btn.addEventListener('click', () => {
  // Toggle the menu visibility
  menu.classList.toggle('hidden');

  // Toggle between menu and close icons
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});


// mobile toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Update slider position
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Next button functionality
    document.getElementById('next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    });

    // Previous button functionality
    document.getElementById('prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    });
});





$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
     
    });  
  });
  $(document).ready(function() {
    $('#autoWidth-1').lightSlider({
        autoWidth:true,
        loop:true, 
    });  
  });
  $(document).ready(function() {
    $('#autoWidth-2').lightSlider({
        autoWidth:true,
        loop:true, 
    });  
  });





   