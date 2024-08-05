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




/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll is greater than the viewport height add this 
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

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

/*=============== VALUE ACCORDION ===============*/
const accordianItems = document.querySelectorAll('.value-accordian-item')

accordianItems.forEach((item) =>{
  const accordianHeader = item.querySelector('.value-accordian-header')
  accordianHeader.addEventListener('click', ()=>{
const openItem = document.querySelector('.accordian-open')

toggleItem(item)

if(openItem && openItem!== item){
  toggleItem(openItem)
}

})

})

const toggleItem = (item) =>{
  const accordianContent = item.querySelector('.value-accordian-content')

if(item.classList.contains('accordian-open')){
  accordianContent.removeAttribute('style')
  item.classList.remove('accordian-open')
}else{
  accordianContent.style.height = accordianContent.scrollHeight + 'px'
  item.classList.add('accordian-open')
}
}

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

/*=============== DARK LIGHT THEME ===============*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
  origin :'top',
  distance : '60px',
  duration :2500,
  // delay :400, 
  // reset: true 
})

sr.reveal('.home-title , .popular-container , .subscribe-container , .footer-container')
sr.reveal('.home-description , .footer-info',{delay:500})
sr.reveal('.home-search',{delay:600})
sr.reveal('.home-value',{delay:700})
sr.reveal('.home-images',{delay:800, origin: 'bottom'})
sr.reveal('.logos-img',{interval : 100})
sr.reveal('.value-images , .contact-content', {origin : 'left'})
sr.reveal('.value-content , .contact-images',{origin : 'right'})







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