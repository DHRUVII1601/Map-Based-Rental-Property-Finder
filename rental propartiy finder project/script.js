let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Wrap around the slides
  currentSlide = (index + totalSlides) % totalSlides;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
























// /* script.js */
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// let index = 0;

// function showSlide(i) {
//   index = (i + slides.length) % slides.length;
//   slider.style.transform = `translateX(-${index * 100}%)`;
// }

// prev.addEventListener('click', () => {
//   showSlide(index - 1);
// });

// next.addEventListener('click', () => {
//   showSlide(index + 1);
// });

// Auto Slide (optional)
// setInterval(() => {
//   showSlide(index + 1);
// }, 5000);



// /* script.js */
// let currentIndex = 0;
// const slider = document.querySelector('.slider-container');
// const images = document.querySelectorAll('.slider-container img');
// const totalImages = images.length;

// function updateSlider() {
//   const width = images[0].clientWidth + 20; // includes margin
//   slider.style.transform = `translateX(${-currentIndex * width}px)`;
// }

// function nextSlide() {
//   if (currentIndex < totalImages - 1) {
//     currentIndex++;
//     updateSlider();
//   }
// }

// function prevSlide() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlider();
//   }
// }


// // function toggleView() {
// //     let map = document.getElementById('map');
// //     let list = document.getElementById('list-view');
// //     if (map.style.display === 'none') {
// //         map.style.display = 'block';
// //         list.style.display = 'none';
// //     } else {
// //         map.style.display = 'none';
// //         list.style.display = 'block';
// //     }
// // }

// // function showPopup(marker, text) {
// //     let popup = document.getElementById('popup');
// //     popup.innerHTML = text;
// //     popup.style.left = marker.style.left;
// //     popup.style.top = marker.style.top;
// //     popup.style.display = 'block';
// // }

// // function inquire(property) {
// //     alert('Inquiry sent for ' + property);
// // }
// // let slideIndex = 0;
// // showSlides();

// // function showSlides() {
// //     let slides = document.getElementsByClassName("slide");
// //     for (let i = 0; i < slides.length; i++) {
// //         slides[i].style.display = "none";
// //     }
// //     slideIndex++;
// //     if (slideIndex > slides.length) {slideIndex = 1}
// //     slides[slideIndex - 1].style.display = "block";
// //     setTimeout(showSlides, 3000);
// // }
// // /* script.js */
// // // Currently, the dropdown opens on hover using CSS.
// // // If you'd like it to open on click, use the code below:

// // document.addEventListener("DOMContentLoaded", () => {
// //     const dropdown = document.querySelector(".dropdown");
// //     const dropbtn = dropdown.querySelector(".dropbtn");
// //     const content = dropdown.querySelector(".dropdown-content");
  
// //     dropbtn.addEventListener("click", (e) => {
// //       e.preventDefault();
// //       content.classList.toggle("show");
// //     });
  
// //     window.addEventListener("click", (e) => {
// //       if (!dropdown.contains(e.target)) {
// //         content.classList.remove("show");
// //       }
// //     });
// //   });
  
// //   /* Add this to style.css */
// //  .dropdown-content.show {
// //     display: block;
// //   }
  