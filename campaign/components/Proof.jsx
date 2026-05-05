const Proof = () => {
  return (
    <section className="section proof-section" id="proof">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">04</span>
            <span className="eyebrow">Proof of work</span>
          </div>
          <h2 className="section-h2">
            We don't pitch outcomes. We <em>recover</em> them.
          </h2>
        </div>

        <div className="testimonial-feature">
          <div className="t-mark">"</div>
          <blockquote>
            We weren't losing because we couldn't sell. We were losing because <em>thirty</em> minutes vanished on every job before anyone touched a tool. Calon mapped it, named it, and rebuilt it.
          </blockquote>
          <div className="t-attribution">
            <div className="t-avatar"></div>
            <div className="t-who">
              <div className="t-name">Founder</div>
              <div className="t-role">14-engineer FM business · West Midlands</div>
            </div>
            <div className="t-stat">
              <div className="t-stat-num">£82k</div>
              <div className="t-stat-lbl">recovered · 14 weeks</div>
            </div>
          </div>
        </div>

        <div className="cases-grid">
          <div className="case-card">
            <div className="case-head">
              <span className="case-tag">Trades</span>
              <span className="case-meta">£1.4m revenue</span>
            </div>
            <p className="case-quote">
              "Quotes used to take two days. Now they're out within four hours and we're winning more of them."
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="case-stat-num">42<span>%</span></div>
                <div className="case-stat-lbl">quote-to-close</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">+50<span>%</span></div>
                <div className="case-stat-lbl">repeat work</div>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-head">
              <span className="case-tag">Security & FM</span>
              <span className="case-meta">32 engineers</span>
            </div>
            <p className="case-quote">
              "We didn't know which jobs made money. Now we do. And we've stopped doing the ones that don't."
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="case-stat-num">£100<span>k</span></div>
                <div className="case-stat-lbl">leak / yr identified</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">12<span>wk</span></div>
                <div className="case-stat-lbl">to handover</div>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-head">
              <span className="case-tag">Hospitality</span>
              <span className="case-meta">3 venues</span>
            </div>
            <p className="case-quote">
              "Bookings used to live in five places. Now they live in one, and we can see who's coming back."
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="case-stat-num">2.4<span>×</span></div>
                <div className="case-stat-lbl">repeat bookings</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">8<span>wk</span></div>
                <div className="case-stat-lbl">to handover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="section cta-section" id="diagnostic">
      <div className="cta-bg">
        <div className="cta-grid"></div>
      </div>
      <div className="section-inner cta-inner cta-inner--simple">
        <div className="cta-simple-badge">
          <span className="form-pulse"></span>
          Booking open · Q2 2026
        </div>

        <h2 className="cta-h2 cta-h2--center">
          Now decide which workflow to <em>fix first.</em>
        </h2>

        <p className="cta-lead cta-lead--center">
          30 to 45 minutes. No deck, no sales pitch. We map your workflow, name the biggest leak, and put a number on it. You leave with a one-page diagnostic, whether or not we ever work together.
        </p>

        <ul className="cta-list cta-list--row">
          <li><span className="li-check">✓</span> Live workflow map · six stages</li>
          <li><span className="li-check">✓</span> Highest-leakage workflow quantified in £</li>
          <li><span className="li-check">✓</span> One-page recovery plan for Monday</li>
          <li><span className="li-check">✓</span> No follow-up unless you ask</li>
        </ul>

        <div className="cta-actions">
          <a href="#diagnostic" className="cta-btn-primary" data-open-roadmap>
            Book the diagnostic <span className="arr">→</span>
          </a>
          <a href="#diagnostic" className="cta-btn-secondary" data-open-roadmap>
            Download the free roadmap first <span className="arr">→</span>
          </a>
        </div>

        <div className="cta-footnote">
          One reply within 4 hours · No mailing list · No automated follow-up
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="assets/calon-logo.png" alt="Calon AI Solutions" className="footer-logo"/>
          <p>Operational systems for founder-led service businesses. Built around how the work actually happens.</p>
        </div>
        <div className="footer-col">
          <h6>What we do</h6>
          <ul>
            <li>Operational diagnostic</li>
            <li>Workflow rebuilds</li>
            <li>Automation systems</li>
            <li>Founder handover</li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Sectors</h6>
          <ul>
            <li>Trades & contractors</li>
            <li>Security & FM</li>
            <li>Hospitality & venues</li>
            <li>Field service</li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Resources</h6>
          <ul>
            <li>Operational leakage guide</li>
            <li>Six-workflow framework</li>
            <li>Diagnostic call</li>
            <li>Case studies</li>
          </ul>
        </div>
        <div className="footer-meta">
          <span>© 2026 Calon AI Solutions · hello@calonai.com</span>
          <span>calonai.com</span>
        </div>
        <div className="footer-sub">
          Also visit · <a href="https://calonaisolutions.com" target="_blank" rel="noopener noreferrer">calonaisolutions.com</a>
        </div>
      </div>
    </footer>
  );
};

window.Proof = Proof;
window.CTA = CTA;
window.Footer = Footer;
