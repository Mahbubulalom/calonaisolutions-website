// Calon — shared site JS
// Nav scroll state + IntersectionObserver reveal
(function(){
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0, rootMargin:'0px 0px -40px 0px'});

  // Promote any .reveal already in the viewport on load, then observe the rest
  const revealEls = document.querySelectorAll('.reveal');
  const vh = window.innerHeight;
  revealEls.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) {
      el.classList.add('in');
    } else {
      io.observe(el);
    }
  });

  // Mobile nav toggle
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      burger.textContent = open ? '×' : '☰';
    });
  }

  // Form handler (diagnostic page)
  const form = document.getElementById('diagnostic-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Sent — we\'ll be in touch within 24h';
      btn.disabled = true;
      form.reset();
    });
  }
})();
