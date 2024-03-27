/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    console.log("Menu shown");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    console.log("Menu hidden");
  });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
  console.log("Menu item clicked");
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
  console.log("Header blur updated");
};
window.addEventListener('scroll', blurHeader);


/*=============== EMAIL JS ===============*/

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  console.log("Email form submitted");
  const templateParams = {
    user_name: contactForm.elements['user_name'].value,
    user_email: contactForm.elements['user_email'].value,
    user_project: contactForm.elements['user_project'].value
  };

  emailjs.sendForm('service_jkf0yra', 'template_ghlew1n', templateParams, '1adDy5qMO3Z8mWHpX')
  .then(() => {
    console.log("Email sent successfully");
    setTimeout(() => {
      contactMessage.textContent = '';
    }, 5000);
    contactForm.reset();
  }, () => {
    console.log("Email sending failed");
    contactMessage.textContent = 'Message not sent❌';
  });
}
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
  console.log("Scroll up button visibility updated");
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
      console.log("Active section updated:", sectionId);
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', {origin:'bottom'});
sr.reveal('.about__data, .skills__data', {origin:'left'});
sr.reveal('.about__image, .certifications', {origin:'right'}); // Update target
sr.reveal('.services__card, .projects__card' , {interval:100});
