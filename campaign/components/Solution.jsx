const Solution = () => {
  return (
    <section className="section solution-section" id="solution">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">02</span>
            <span className="eyebrow">How we operate</span>
          </div>
          <h2 className="section-h2">
            We don't deploy software. We <em>rebuild</em> the workflow around how your business actually works.
          </h2>
        </div>

        <div className="process-3d">
          {[
            { n: '01', title: 'Diagnose', body: 'Map the actual workflow, not how it should work, how it does. 30–45 minutes, founder + ops lead.', out: 'Workflow map · 6 stages' },
            { n: '02', title: 'Identify', body: 'Name the biggest leak. Specific to the business, not generic advice. Quantified in £.', out: 'Leak ledger · ranked' },
            { n: '03', title: 'Build', body: 'Design the system. Workflow, handover doc, automation, dashboard. Around your team, not over it.', out: 'Operating system · live' },
            { n: '04', title: 'Operate', body: 'Trained, documented, owned by your operator. Margin recovery measured monthly.', out: 'Founder handover · signed' },
          ].map((step, i) => (
            <div className="process-step" key={step.n} style={{'--i': i}}>
              <div className="step-card">
                <div className="step-number">{step.n}</div>
                <div className="step-line"></div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
                <div className="step-meta">
                  <span>Output</span>
                  <span>{step.out}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="compare-block">
          <div className="compare-head">
            <span className="eyebrow">Now → with Calon</span>
            <span className="compare-meta">Real client averages · anonymised</span>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-header">
              <div>Workflow</div>
              <div className="now-col">Now</div>
              <div className="with-col">With Calon</div>
            </div>
            {[
              ['Lead response time', '24–48 hrs · multi-channel', '2–4 hrs · one inbox · routed'],
              ['Quote turnaround', '2+ hrs · manual entry', '30 min · history pre-filled'],
              ['Job handover', 'Email memory · 30 min on-site', 'Standard doc · scope pre-confirmed'],
              ['Repeat work', 'Random · founder-led', 'Systematic · proactive reminders'],
            ].map(([label, now, with_]) => (
              <div className="compare-row" key={label}>
                <div className="compare-label">{label}</div>
                <div className="now-col">{now}</div>
                <div className="with-col">{with_}</div>
              </div>
            ))}
            <div className="compare-row total-row">
              <div className="compare-label">Recovered margin / year</div>
              <div className="now-col">N/A</div>
              <div className="with-col total-val">£82,000 avg.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sectors = () => {
  return (
    <section className="section sectors-section" id="sectors">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">03</span>
            <span className="eyebrow">Where we operate</span>
          </div>
          <h2 className="section-h2">
            Built for founder-led firms between <em>£500k</em> and <em>£5m</em>.
          </h2>
        </div>

        <div className="sectors-grid">
          <div className="sector-card">
            <div className="sector-head">
              <span className="sector-num">01</span>
              <span className="sector-pill">Core sector</span>
            </div>
            <h3>Trades & contractors</h3>
            <p>Engineers on site without scope. Rework eats margin. Quotes drift across two follow-ups.</p>
            <div className="sector-frictions">
              <span className="friction-tag">Job handover</span>
              <span className="friction-tag">Scope confirm</span>
              <span className="friction-tag">Time tracking</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-head">
              <span className="sector-num">02</span>
              <span className="sector-pill">Core sector</span>
            </div>
            <h3>Security & FM</h3>
            <p>Multi-site, multi-engineer. Visibility breaks at scale. Schedules slip and customers notice.</p>
            <div className="sector-frictions">
              <span className="friction-tag">Scheduling</span>
              <span className="friction-tag">Response time</span>
              <span className="friction-tag">Follow-up</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-head">
              <span className="sector-num">03</span>
              <span className="sector-pill">Core sector</span>
            </div>
            <h3>Hospitality & venues</h3>
            <p>Bookings scattered across channels. Repeat work isn't surfaced. Margin per cover never measured.</p>
            <div className="sector-frictions">
              <span className="friction-tag">Lead capture</span>
              <span className="friction-tag">CRM</span>
              <span className="friction-tag">Repeat revenue</span>
            </div>
          </div>
        </div>

        <div className="sector-secondary">
          <span className="eyebrow muted">Also serving</span>
          <span className="sec-pill">Field service</span>
          <span className="sec-pill">Recruitment</span>
          <span className="sec-pill">Property</span>
          <span className="sec-pill">Training</span>
          <span className="sec-pill">Other founder-led service businesses</span>
        </div>
      </div>
    </section>
  );
};

window.Solution = Solution;
window.Sectors = Sectors;
