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

  // Inject "Menu" eyebrow label at top of mobile menu (once)
  if (links && !links.querySelector('.nav-menu-label')) {
    const label = document.createElement('li');
    label.className = 'nav-menu-label';
    label.textContent = 'Menu';
    links.prepend(label);
  }

  // Inject contact block (E-Mail + Follow socials) into mobile menu (once)
  if (links && !links.querySelector('.nav-contact-block')) {
    const contact = document.createElement('li');
    contact.className = 'nav-contact-block';
    contact.innerHTML = `
      <div class="nc-field">
        <div class="nc-label">E-Mail</div>
        <div class="nc-val"><a href="mailto:whereyouare@calonaisolutions.com">whereyouare@calonaisolutions.com</a></div>
      </div>
      <div class="nc-field">
        <div class="nc-label">Follow</div>
        <div class="nc-socials">
          <a href="https://www.linkedin.com/company/calonaisolutions" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a>
          <a href="https://www.instagram.com/calon_ai_solutions/" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.youtube.com/@CalonAISolutions-v7s" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg></a>
        </div>
      </div>`;
    links.appendChild(contact);
  }

  // Inject bottom CTA into the main mobile menu (once)
  if (links && !links.querySelector('.nav-main-cta')) {
    const mainCta = document.createElement('li');
    mainCta.className = 'nav-main-cta';
    mainCta.innerHTML = `<a href="diagnostic.html">Book a diagnostic<span class="cta-pill" aria-hidden="true">↗</span></a>`;
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
    ctaWrap.innerHTML = `<a href="diagnostic.html">Book a diagnostic<span class="cta-pill" aria-hidden="true">↗</span></a>`;
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
