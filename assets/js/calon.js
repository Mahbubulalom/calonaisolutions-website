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
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = links.classList.toggle('open');
      burger.textContent = open ? '×' : '☰';
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Inject bottom CTA into the main mobile menu (once)
  if (links && !links.querySelector('.nav-main-cta')) {
    const mainCta = document.createElement('li');
    mainCta.className = 'nav-main-cta';
    mainCta.innerHTML = `<a href="diagnostic.html">Book a diagnostic →</a>`;
    links.appendChild(mainCta);
  }

  // Inject full-screen header + CTA into each mobile dropdown (once)
  document.querySelectorAll('.nav-links > li').forEach(li => {
    const btn = li.querySelector(':scope > button');
    const drop = li.querySelector('.nav-drop');
    if (!btn || !drop) return;

    // Back header
    const header = document.createElement('div');
    header.className = 'drop-header';
    header.innerHTML = `<button class="drop-back" aria-label="Back">←</button><span class="drop-title">${btn.textContent.trim().replace('▾','').trim()}</span>`;
    drop.prepend(header);

    // Wrap existing links in .drop-links for flex layout
    const wrapper = document.createElement('div');
    wrapper.className = 'drop-links';
    Array.from(drop.children).forEach(child => {
      if (!child.classList.contains('drop-header')) wrapper.appendChild(child);
    });
    drop.appendChild(wrapper);

    // CTA button
    const ctaWrap = document.createElement('div');
    ctaWrap.className = 'drop-cta-wrap';
    ctaWrap.innerHTML = `<a href="diagnostic.html">Book a diagnostic →</a>`;
    drop.appendChild(ctaWrap);

    // Back button closes the dropdown
    header.querySelector('.drop-back').addEventListener('click', (e) => {
      e.stopPropagation();
      li.classList.remove('open');
    });
  });

  // Dropdown click/tap handlers (touch devices + keyboard nav)
  document.querySelectorAll('.nav-links > li > button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const li = btn.closest('li');
      const isOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-links > li.open').forEach(el => {
        if (el !== li) el.classList.remove('open');
      });
      li.classList.toggle('open', !isOpen);
      e.stopPropagation();
    });
  });

  // Close dropdowns when clicking outside nav
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-links > li.open').forEach(el => el.classList.remove('open'));
    if (links) { links.classList.remove('open'); }
    if (burger) burger.textContent = '☰';
    document.body.style.overflow = '';
  });

  // Don't close when clicking inside nav
  const navEl = document.querySelector('.nav');
  if (navEl) navEl.addEventListener('click', e => e.stopPropagation());

  // Close everything when a dropdown link is clicked
  if (links) {
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        document.querySelectorAll('.nav-links > li.open').forEach(el => el.classList.remove('open'));
        if (burger) burger.textContent = '☰';
        document.body.style.overflow = '';
      });
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
