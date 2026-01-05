// script.js — small vanilla JS for navigation, smooth scroll, and reveal animations

document.addEventListener('DOMContentLoaded', function () {
    // set year in footer
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('nav-list');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            navList.style.display = expanded ? '' : 'flex';
            // small accessibility touch
            if (!expanded) navList.querySelector('a')?.focus();
        });
    }

    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            // Only handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // close mobile nav after click
                if (window.innerWidth <= 720 && navList && navToggle) {
                    navList.style.display = '';
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // reveal-on-scroll using IntersectionObserver — adds class .show to fade-in elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in, .service-card, .portfolio-item, .stat').forEach(el => {
        observer.observe(el);
    });

    // keyboard accessibility for portfolio items: open overlay on Enter
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // toggle overlay visibility for keyboard users
                const overlay = item.querySelector('.portfolio-overlay');
                if (overlay) overlay.classList.toggle('show');
            }
        });
    });
});

/* End of script.js */
