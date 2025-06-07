// Show the scroll-to-top button only when the hero/nav is out of view
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    const hero = document.querySelector('.hero');
    if (!btn || !hero) return;
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
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