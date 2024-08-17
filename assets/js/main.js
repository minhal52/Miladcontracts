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
sr.reveal('.home-title, .popular-container, .subscribe-container, .footer-container');
sr.reveal('.home-description, .footer-info', { delay: 500 });
sr.reveal('.home-search', { delay: 600 });
sr.reveal('.home-value', { delay: 700 });
sr.reveal('.home-images', { delay: 800, origin: 'bottom' });
sr.reveal('.logos-img', { interval: 100 });
sr.reveal('.value-images, .contact-content', { origin: 'left' });
sr.reveal('.value-content, .contact-images', { origin: 'right' });





document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('hero-video');
    video.play().catch(function() {
        // Autoplay failed, possibly due to browser policy. 
        // Add a click event listener to play the video.
        video.muted = true;
        video.play();
        video.controls = true;
    });
});


function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


// CONTACT FORM MESSAGE GENERATER
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');

// Function to enable the button if all fields are filled
function enableButton() {
    if (nameField.value && emailField.value && messageField.value) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}

// Add event listeners to fields
nameField.addEventListener('input', enableButton);
emailField.addEventListener('input', enableButton);
messageField.addEventListener('input', enableButton);

// Handle button click
sendBtn.addEventListener('click', function() {
    const recipientEmail = "@miladconstruction.com"; // Replace with the actual recipient's email address
    const subject = encodeURIComponent("Inquiry from Website");
    const name = encodeURIComponent(nameField.value);
    const email = encodeURIComponent(emailField.value);
    const message = encodeURIComponent(messageField.value);

    const body = encodeURIComponent(`Hello,\n\nMy name is ${name}.\nMy email is ${email}.\n\n${message}`);

    // Construct the mailto link with the prefilled subject and body
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open the mailto link to trigger the email client with the prefilled message
    window.location.href = mailtoLink;
});