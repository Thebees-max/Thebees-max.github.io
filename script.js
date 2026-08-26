// Smooth scroll and form handling for portfolio
document.addEventListener('DOMContentLoaded', function () {
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Kiitos viestistäsi! Vastaan sinulle mahdollisimman pian.');
            contactForm.reset();
        });
    }

    // CTA button scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', function () {
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    navLinks.forEach(l => l.style.borderBottom = 'none');
                    link.style.borderBottom = '2px solid white';
                }
            }
        });
    });
});
