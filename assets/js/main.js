// Ensuring global variables are declared only once
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      scrollUp = document.getElementById('scroll-up'),
      contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

// Event Listeners for Menu Toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Scroll Up Visibility
window.addEventListener('scroll', () => {
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});

// Send Email with EmailJS
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jkf0yra', 'template_ghlew1n', '#contact-form', '1adDy5qMO3Z8mWHpX')
            .then(() => {
                contactMessage.textContent = 'Email sent successfully!';
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
                contactForm.reset();
            }, () => {
                contactMessage.textContent = 'Message not sent❌';
            });
    });
}

// Scroll Reveal Animations - assuming ScrollReveal is properly initialized
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 900,
    delay: 400,
    reset: true
});

sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', { origin: 'bottom' });
sr.reveal('.about__data, .skills__data, .skills__content', { origin: 'left' });
sr.reveal('.about__image, .certifications__list', { origin: 'right' });
sr.reveal('.services__card, .projects__card', { interval: 100 });
