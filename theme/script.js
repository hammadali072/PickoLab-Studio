const toggleButtons = document.querySelectorAll('.toggle-button');
const contentContainer = document.getElementById('contentContainer');

toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    const targetContentId = this.getAttribute('data-target');
    
    contentContainer.querySelectorAll('.content').forEach(content => {
      content.style.display = 'none';
    });
    document.getElementById(targetContentId).style.display = 'grid';
    
    toggleButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const toggleInput = document.querySelector(".toggle-input");
  const content1 = document.querySelector(".price-content1");
  const content2 = document.querySelector(".price-content2");
  content2.style.display="none";
  toggleInput.addEventListener("change", function() {
      if (this.checked) {
          content1.style.display = "none";
          content2.style.display = "block";
      } else {
          content1.style.display = "block";
          content2.style.display = "none";
      }
  });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    mouseDrag:false,
    autoplay:true,
    nav:true,
    navText: ['<span><svg class="prev" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg></span>', 
    '<span><svg class="next" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></span>'],
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:10,
            nav:false
        },
        400:{
            items:2,
            margin:10,
            nav:false
        },
        576:{
            items:2,
            margin:10,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true
        },
        1200:{
            items:3,
            nav:true
        },
    }
})
});
// var owl = $('.owl-carousel');
// owl.on('mousewheel', '.owl-stage', function (e) {
//   if (e.deltaY>0) {
//       owl.trigger('next.owl');
//   } else {
//       owl.trigger('prev.owl');
//   }
//   e.preventDefault();
// });


// Responsive Nav-bar
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("nav-button");
  const content = document.getElementById("response-nav");

  // Initial state (hidden)
  let isContentVisible = false;

  // Toggle content function
  function toggleContent() {
    if (isContentVisible) {
      content.style.transform="translateX(100%)";
      // content.style.display = "none";
    } else {
      content.style.display = "block";
      content.style.transform="translateX(0%)";
    }
    isContentVisible = !isContentVisible; // Toggle state
  }

  // Attach click event to toggle button
  toggleButton.addEventListener("click", toggleContent);
});

