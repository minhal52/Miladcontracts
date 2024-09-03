// navigation bar mobile view=====================

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}



// ==========================counting numbers==========================


const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    const counterNums = document.querySelectorAll(".counter-numbers");
    const speed = 150;

    counterNums.forEach((curElem) => {
      const targetNumber = parseInt(curElem.dataset.number);
      const updateNumber = () => {
        const initialNum = parseInt(curElem.innerText);
        const incrementNumber = Math.ceil(targetNumber / speed);

        if (initialNum < targetNumber) {
          if (curElem.dataset.number === "100") {
            curElem.innerText = Math.min(initialNum + incrementNumber, targetNumber);
          } else {
            curElem.innerText = `${initialNum + incrementNumber}+`;
          }
          if (initialNum + incrementNumber < targetNumber) {
            setTimeout(updateNumber, 75);
          }
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  }, {
  root: null,
  threshold: 0,
}
);

workObserver.observe(workSection);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular-container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop:true,

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')

		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than the 350 viewport height add the scroll show class to the tag
if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  // delay: 400, 
  // reset: true 
});

// Adjust these selectors based on your updated HTML
sr.reveal('.hero-text, .popular-container, .subscribe-container, .footer-container');
sr.reveal('.home-description,.hero-logo,.footer-info', { delay: 500 });
sr.reveal('.home-search', { delay: 600 });
sr.reveal('.home-value', { delay: 700 });
sr.reveal('.hero-image', { delay: 800, origin: 'bottom' });
sr.reveal('.logos-img', { interval: 100 });
sr.reveal(' .value-images, .contact-content', { origin: 'left' });
sr.reveal('.value-content, .contact-images', { origin: 'right' });


// vdeo-------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('hero-video');
  const playButton = document.getElementById('play-button');
  const volumeSlider = document.getElementById('volume-slider');
  const isMobile = window.innerWidth <= 768;

  // Autoplay video with sound on large screens
  if (!isMobile) {
      video.muted = false; // Unmute the video for large screens
      video.autoplay = true;
      video.play();
  } else {
      video.muted = true; // Keep it muted on mobile initially
      playButton.style.display = 'block'; // Show play button on mobile
  }

  playButton.addEventListener('click', function() {
      if (video.paused) {
          video.muted = false; // Unmute the video on click
          video.play(); // Play the video
          playButton.style.display = 'none'; // Hide play button
          volumeSlider.style.display = 'block'; // Show volume slider on mobile
      } else {
          video.pause(); // Pause the video if it's playing
      }
  });

  volumeSlider.addEventListener('input', function() {
      video.volume = this.value; // Adjust the video volume
  });
});





// CONTACT FORM MESSAGE GENERATER
function sendMail(event) { 
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  let params = {
    name: document.getElementById("name").value,  // Matches {{name}} in the template
    email: document.getElementById("email").value, // Matches {{email}} in the template
    country: document.getElementById("country").value, // Matches {{country}} in the template
    message: document.getElementById("message").value, // Matches {{message}} in the template
  };

  emailjs.send("service_72quqba", "template_kcy9yn8", params)
    .then(function(response) {
      // Hide the form and show the thank you message
      document.getElementById("contactform").style.display = "none";
      document.getElementById("thankYouMessage").style.display = "block";
    }, function(error) {
      alert("Failed to send email. Please try again later.");
      console.error("EmailJS error: ", error);
    });
}

// Attach the event listener directly to the form submission
document.getElementById("contactForm").addEventListener("submit", sendMail);
