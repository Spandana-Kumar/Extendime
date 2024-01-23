

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   // Responsive breakpoints
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


// const counters = [0, 0, 0, 0]; // Initialize with the number of cards you have
//         const targetValues = [70, 70, 70, 70]; // Set the target values for each card

//         // Function to increment the counter for a specific card
//         function incrementCounter(cardIndex) {
//             if (counters[cardIndex] < targetValues[cardIndex]) {
//                 counters[cardIndex]++;
//                 document.getElementById(`counter${cardIndex + 1}`).textContent = counters[cardIndex];
//             }
//         }

//         // Add an event listener to the window's scroll event
//         window.addEventListener('scroll', function() {
//             // Check if each card is in the viewport
//             for (let i = 0; i < counters.length; i++) {
//                 const cardElement = document.querySelector(`#counter${i + 1}`);
//                 const cardRect = cardElement.getBoundingClientRect();

//                 // Adjust the threshold as needed to determine when the card is in view
//                 if (cardRect.top <= window.innerHeight * 0.50 && counters[i] < targetValues[i]) {
//                     incrementCounter(i);
//                 }
//             }
//         });

const counters = [0, 0, 0, 0]; 
        const targetValues = [70, 70, 70, 70]; 

        // Function to increment the counter for a specific card
        function incrementCounter(cardIndex) {
            if (counters[cardIndex] < targetValues[cardIndex]) {
                counters[cardIndex]++;
                document.getElementById(`counter${cardIndex + 1}`).textContent = counters[cardIndex];
                setTimeout(() => {
                    incrementCounter(cardIndex);
                }, 50); 
            }
        }

        // Start the counters on page load
        window.addEventListener('load', function () {
            for (let i = 0; i < counters.length; i++) {
                incrementCounter(i);
            }
        });


















