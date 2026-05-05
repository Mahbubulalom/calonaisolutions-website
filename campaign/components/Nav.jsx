const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-brand" onClick={closeMenu}>
          <img src="assets/calon-logo.png" alt="Calon" className="nav-logo"/>
        </a>
        <div className="nav-links">
          <a href="#problem">Diagnosis</a>
          <a href="#solution">How we operate</a>
          <a href="#sectors">Sectors</a>
          <a href="#proof">Proof</a>
        </div>
        <a href="#diagnostic" className="nav-cta">
          Book the diagnostic <span className="arr">→</span>
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <div className={`nav-drawer ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
          <div className="nav-drawer-eyebrow">Navigate</div>
          <a href="#problem" onClick={closeMenu}>Diagnosis</a>
          <a href="#solution" onClick={closeMenu}>How we operate</a>
          <a href="#sectors" onClick={closeMenu}>Sectors</a>
          <a href="#proof" onClick={closeMenu}>Proof</a>
          <div className="nav-drawer-divider"></div>
          <a href="#diagnostic" className="nav-drawer-cta" onClick={closeMenu}>
            Book the diagnostic <span className="arr">→</span>
          </a>
          <p className="nav-drawer-foot">30–45 minutes. No sales pitch.</p>
        </div>
      </div>
    </nav>
  );
};

window.Nav = Nav;
