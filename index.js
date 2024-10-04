


// mobile toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});



const slider = document.getElementById('slider');
const images = slider.children;
const totalImages = images.length;
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100; // Move to the correct image
    slider.style.transform = `translateX(${offset}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
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





   