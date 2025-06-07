// Show the scroll-to-top button only when the nav is out of view
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    const nav = document.querySelector('.nav');
    if (!btn || !nav) return;
    const navBottom = nav.getBoundingClientRect().bottom;
    if (navBottom < 0) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
});

// Smooth scroll to top on button click
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
        btn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});

//Testimonies

const testimonials = [
    document.getElementById('testimonial1'),
    document.getElementById('testimonial2')
];
let current = 0;

function showTestimonial(idx) {
    testimonials.forEach((el, i) => {
        el.style.display = i === idx ? 'flex' : 'none';
    });
}

document.querySelector('.testimonial-arrow.left').onclick = function() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
};
document.querySelector('.testimonial-arrow.right').onclick = function() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
};

showTestimonial(current);