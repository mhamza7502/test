// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const navLinks = document.getElementById('nav-links');

  menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Reveal Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.reveal-text, .reveal-element');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
