

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


// img-slider////
const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = slider.getElementsByTagName('img');
let index = 0;

function showSlide(newIndex) {
    const totalSlides = images.length;
    if (newIndex >= totalSlides) {
        index = 0;
    } else if (newIndex < 0) {
        index = totalSlides - 1;
    } else {
        index = newIndex;
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

// Optional: auto-slide every 3 seconds
setInterval(() => {
    showSlide(index + 1);
}, 3000);

// Initial display
showSlide(index);
// ./img-slider///



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
        onSliderLoad: function() {
            $('#autoWidth-1').removeClass('cS-hidden');
        } 
    });  
  });





   