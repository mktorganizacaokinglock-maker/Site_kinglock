// Scroll reveal usando Intersection Observer
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => {
  observer.observe(reveal);
});

// Menu hambúrguer (mobile)
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-menu');
  if(!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fecha ao clicar num link
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
})();
