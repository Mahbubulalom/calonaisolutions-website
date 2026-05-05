const RoadmapModal = ({ open, onClose }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [sector, setSector] = React.useState('');
  const [bottleneck, setBottleneck] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [sendError, setSendError] = React.useState(false);
  const [formType, setFormType] = React.useState('Roadmap Download');

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const doSubmit = async (type) => {
    const errs = {};
    if (!name.trim()) errs.name = 'Required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email required';
    if (!company.trim()) errs.company = 'Required';
    if (!sector) errs.sector = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setFormType(type);
    try {
      await window.sendLeadEmail({
        form_type:  type,
        name:       name,
        from_email: email,
        company:    company,
        sector:     sector,
        bottleneck: bottleneck || 'Not provided',
        revenue:    '',
        to_emails:  'fab@calonaisolutions.com, alom@calonaisolutions.com',
      });
    } catch (err) {
      console.error('Email send failed:', err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  const submit = (e) => { e.preventDefault(); doSubmit(formType); };

  const reset = () => {
    setSubmitted(false);
    setName(''); setEmail(''); setCompany(''); setSector(''); setBottleneck('');
    setErrors({});
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-shell" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal-grid">
          <div className="modal-left">
            <div className="modal-eyebrow">
              <span className="dot"></span>
              <span>Free · 9 pages · 12 min read</span>
            </div>

            <h2 className="modal-h2">
              Not ready to book the call? Start with the <em>roadmap.</em>
            </h2>

            <p className="modal-lead">
              A practical guide for founder-led service businesses. Where operational friction actually comes from, which workflows to fix first, and where AI or automation creates real commercial value.
            </p>

            <div className="modal-benefits">
              <div className="benefits-eyebrow">Inside the roadmap</div>
              <ul>
                <li><span className="check">✓</span>Spot the operational bottlenecks most service businesses miss</li>
                <li><span className="check">✓</span>Understand where automation is useful, and where it isn't</li>
                <li><span className="check">✓</span>Identify follow-up, quoting, handover, scheduling, and reporting leakage</li>
                <li><span className="check">✓</span>Prioritise the first workflow worth fixing</li>
                <li><span className="check">✓</span>Avoid wasting money on software that doesn't connect to how your business works</li>
              </ul>
            </div>

            <div className="modal-meta-row">
              <div className="modal-meta-item">
                <div className="meta-num">9</div>
                <div className="meta-lbl">pages</div>
              </div>
              <div className="modal-meta-divider"></div>
              <div className="modal-meta-item">
                <div className="meta-num">12<span>min</span></div>
                <div className="meta-lbl">read</div>
              </div>
              <div className="modal-meta-divider"></div>
              <div className="modal-meta-item">
                <div className="meta-num">6</div>
                <div className="meta-lbl">workflows</div>
              </div>
            </div>
          </div>

          <div className="modal-right">
            {!submitted ? (
              <form className="modal-form" onSubmit={submit} noValidate>
                <div className="modal-form-head">
                  <div className="form-title-row">
                    <span className="form-icon">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <rect x="3" y="2" width="13" height="18" rx="1" stroke="currentColor" strokeWidth="1.3"/>
                        <path d="M6 7H13M6 10H13M6 13H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <div>
                      <h3>The Practical Roadmap</h3>
                      <span className="form-sub">For founder-led service businesses</span>
                    </div>
                  </div>
                </div>

                <div className="m-field">
                  <label>Your name<span className="req">*</span></label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? 'err' : ''}
                  />
                  {errors.name && <span className="m-err">{errors.name}</span>}
                </div>

                <div className="m-field">
                  <label>Business email<span className="req">*</span></label>
                  <input
                    type="email"
                    placeholder="john@company.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? 'err' : ''}
                  />
                  {errors.email && <span className="m-err">{errors.email}</span>}
                </div>

                <div className="m-field">
                  <label>Company<span className="req">*</span></label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={errors.company ? 'err' : ''}
                  />
                  {errors.company && <span className="m-err">{errors.company}</span>}
                </div>

                <div className="m-field">
                  <label>Sector<span className="req">*</span></label>
                  <div className="sector-grid">
                    {[
                      { v: 'security', l: 'Security · FM' },
                      { v: 'field', l: 'Field service' },
                      { v: 'trades', l: 'Trades & contractors' },
                      { v: 'hospitality', l: 'Hospitality & venues' },
                      { v: 'other', l: 'Other service' },
                    ].map((s) => (
                      <button
                        type="button"
                        key={s.v}
                        className={`sector-pick ${sector === s.v ? 'active' : ''}`}
                        onClick={() => setSector(s.v)}
                      >
                        {s.l}
                      </button>
                    ))}
                  </div>
                  {errors.sector && <span className="m-err">{errors.sector}</span>}
                </div>

                <div className="m-field">
                  <label>Biggest operational bottleneck right now?<span className="opt">optional</span></label>
                  <textarea
                    placeholder="Helps us tailor the roadmap to your sector, one or two lines is enough."
                    value={bottleneck}
                    onChange={(e) => setBottleneck(e.target.value)}
                    rows={3}
                  />
                </div>

                <button
                  type="button"
                  className="modal-book-btn"
                  disabled={loading}
                  onClick={() => doSubmit('Diagnostic Booking')}
                >
                  {loading && formType === 'Diagnostic Booking' ? (
                    <><span className="btn-spinner"></span>Sending…</>
                  ) : (
                    <>Book the diagnostic <span className="arr">→</span></>
                  )}
                </button>

                <button
                  type="button"
                  className="modal-submit"
                  disabled={loading}
                  onClick={() => doSubmit('Roadmap Download')}
                >
                  {loading && formType === 'Roadmap Download' ? (
                    <><span className="btn-spinner"></span>Sending…</>
                  ) : (
                    <>Download the roadmap <span className="arr">→</span></>
                  )}
                </button>

                <p className="modal-privacy">
                  We use your details only to send the roadmap and relevant operational insights. No mailing list. No automated follow-up.
                </p>
              </form>
            ) : (
              <div className="modal-success">
                <div className="success-mark">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16 28L24 36L40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="success-eyebrow">{formType === 'Diagnostic Booking' ? 'Request received' : 'Roadmap on its way'}</div>
                <h3>{formType === 'Diagnostic Booking' ? 'We\'ll be in touch.' : 'Check your inbox.'}</h3>
                <p>
                  {formType === 'Diagnostic Booking'
                    ? <>We'll reach out to <strong>{email}</strong> within 4 hours to confirm a 30-45 min slot. No deck. No pitch.</>
                    : <>We're sending the roadmap to <strong>{email}</strong>. As you read it, pay attention to where your business relies on manual chasing, disconnected tools, or founder oversight.</>
                  }
                </p>
                <div className="success-next">
                  <div className="success-next-eyebrow">Next step · when you're ready</div>
                  <button className="success-cta" onClick={reset}>
                    Book the operational diagnostic <span className="arr">→</span>
                  </button>
                  <p className="success-next-sub">30–45 minutes. No sales pitch. Just clarity on which workflow to fix first.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

window.RoadmapModal = RoadmapModal;
