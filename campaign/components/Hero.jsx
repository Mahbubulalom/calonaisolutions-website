const Hero = ({ heroContent, show3D, bgStyle }) => {
  return (
    <section className="hero">
      <div className="hero-bg">
        {bgStyle !== 'flat' && bgStyle !== 'glow' && <div className="grid-floor"></div>}
        {bgStyle !== 'flat' && <div className="hero-glow"></div>}
      </div>

      <div className="hero-inner" style={!show3D ? {gridTemplateColumns: '1fr', maxWidth: '900px'} : undefined}>
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            <span>For trades · security · FM · field service</span>
          </div>

          <h1 className="hero-h1">{heroContent.h1}</h1>

          <p className="hero-lead">{heroContent.lead}</p>

          <div className="lead-form-3d-wrap">
            <form className="lead-form lead-form-3d" onSubmit={(e) => e.preventDefault()}>
              <div className="lead-form-label">
                <span className="lead-form-dot"></span>
                <span>Book your operational diagnostic</span>
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="founder@yourcompany.co.uk"
                  aria-label="Email"
                />
                <button type="submit" data-open-roadmap>
                  Book the diagnostic <span className="arr">→</span>
                </button>
              </div>
              <div className="lead-form-divider"></div>
              <button type="button" className="lead-form-roadmap-btn" data-open-roadmap>
                <span className="roadmap-btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="1" width="9" height="13" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 5H8M4 7.5H8M4 10H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M11 9L13.5 11.5L11 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Download the free roadmap
                <span className="arr" style={{marginLeft: 'auto', opacity: 0.6}}>↓</span>
              </button>
              <div className="form-sub">
                <span className="check">✓</span>
                No sales pitch · No mailing list · Reply within 4 hours
              </div>
            </form>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">£82k</div>
              <div className="stat-lbl">avg. margin recovered<br/>per engagement</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">14<span className="unit">wk</span></div>
              <div className="stat-lbl">average time to<br/>full system handover</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">23</div>
              <div className="stat-lbl">founder-led firms<br/>diagnosed in 2025</div>
            </div>
          </div>
        </div>

        {show3D && (
          <div className="hero-right">
            <DiagnosticStack />
          </div>
        )}
      </div>
    </section>
  );
};

const DiagnosticStack = () => {
  return (
    <div className="stack-scene">
      <div className="stack-card stack-back">
        <div className="card-head">
          <span className="card-eyebrow">Workflow map · 04 / 06</span>
          <span className="card-tag">Stage 02</span>
        </div>
        <div className="workflow-rail">
          <div className="rail-step">
            <div className="rail-dot done"></div>
            <div className="rail-label">Lead in</div>
          </div>
          <div className="rail-line"></div>
          <div className="rail-step">
            <div className="rail-dot done"></div>
            <div className="rail-label">Quote</div>
          </div>
          <div className="rail-line"></div>
          <div className="rail-step">
            <div className="rail-dot active"></div>
            <div className="rail-label">Handover</div>
            <div className="rail-leak">30 min lost</div>
          </div>
          <div className="rail-line dim"></div>
          <div className="rail-step dim">
            <div className="rail-dot"></div>
            <div className="rail-label">On site</div>
          </div>
          <div className="rail-line dim"></div>
          <div className="rail-step dim">
            <div className="rail-dot"></div>
            <div className="rail-label">Invoice</div>
          </div>
        </div>
      </div>

      <div className="stack-card stack-mid">
        <div className="card-head">
          <span className="card-eyebrow accent">Margin leak · live</span>
          <span className="card-pulse">
            <span className="pulse-dot"></span>
            tracking
          </span>
        </div>
        <div className="leak-grid">
          <div className="leak-row">
            <div className="leak-label">Scope clarification on site</div>
            <div className="leak-bar"><div className="leak-fill" style={{width: '78%'}}></div></div>
            <div className="leak-val">£18k</div>
          </div>
          <div className="leak-row">
            <div className="leak-label">Quote follow-up drift</div>
            <div className="leak-bar"><div className="leak-fill" style={{width: '54%'}}></div></div>
            <div className="leak-val">£12k</div>
          </div>
          <div className="leak-row">
            <div className="leak-label">Job overrun (untracked)</div>
            <div className="leak-bar"><div className="leak-fill warn" style={{width: '92%'}}></div></div>
            <div className="leak-val warn">£28k</div>
          </div>
          <div className="leak-row">
            <div className="leak-label">Repeat work missed</div>
            <div className="leak-bar"><div className="leak-fill" style={{width: '36%'}}></div></div>
            <div className="leak-val">£8k</div>
          </div>
        </div>
        <div className="leak-total">
          <span>Annual leakage</span>
          <span className="leak-total-num">£66,000</span>
        </div>
      </div>

      <div className="stack-card stack-front">
        <div className="card-head">
          <span className="card-eyebrow accent">Diagnostic · sample</span>
          <span className="card-tag success">Recoverable</span>
        </div>
        <div className="front-stat">
          <div className="front-num">£100<span className="front-unit">k</span></div>
          <div className="front-label">recovered margin / year</div>
        </div>
        <div className="front-meta">
          <div className="front-meta-row">
            <span className="front-meta-lbl">Workflow</span>
            <span className="front-meta-val">Quote → handover rebuild</span>
          </div>
          <div className="front-meta-row">
            <span className="front-meta-lbl">Build time</span>
            <span className="front-meta-val">14 weeks</span>
          </div>
          <div className="front-meta-row">
            <span className="front-meta-lbl">Software added</span>
            <span className="front-meta-val">None</span>
          </div>
        </div>
      </div>

      <div className="float-ticker">
        <span className="ticker-dot"></span>
        <span>diagnostic.run() · live</span>
      </div>
    </div>
  );
};

window.Hero = Hero;
