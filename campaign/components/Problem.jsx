const TrustStrip = () => {
  return (
    <section className="trust-strip">
      <div className="trust-inner">
        <div className="trust-label">
          <span className="trust-line"></span>
          <span>Operating across</span>
        </div>
        <div className="trust-sectors">
          <span>Trades & contractors</span>
          <span className="dot-sep">·</span>
          <span>Security & FM</span>
          <span className="dot-sep">·</span>
          <span>Field service</span>
          <span className="dot-sep">·</span>
          <span>Hospitality</span>
          <span className="dot-sep">·</span>
          <span>Recruitment</span>
          <span className="dot-sep">·</span>
          <span>Property</span>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="section problem-section" id="problem">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">01</span>
            <span className="eyebrow">The diagnosis</span>
          </div>
          <h2 className="section-h2">
            Margin <em>leaks</em> at every stage of the job. <br/>
            <span className="muted">You won't find it on the P&L. It hides in the workflow.</span>
          </h2>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-card-head">
              <span className="problem-num">Stage 01</span>
              <span className="problem-tag">£24k / yr</span>
            </div>
            <h3 className="problem-h3">Before the job</h3>
            <p className="problem-quote">
              "The quote took longer than it should have. Two follow-ups before they said yes."
            </p>
            <ul className="problem-list">
              <li>Lead response: 24–48 hours · multi-channel chaos</li>
              <li>Quote turnaround: 2+ hours · manual data entry</li>
              <li>Conversion drift: silent, never measured</li>
            </ul>
          </div>

          <div className="problem-card pinned">
            <div className="pin-tag">most leak</div>
            <div className="problem-card-head">
              <span className="problem-num">Stage 02</span>
              <span className="problem-tag">£42k / yr</span>
            </div>
            <h3 className="problem-h3">During the job</h3>
            <p className="problem-quote">
              "Engineers show up without scope. 30 minutes vanish before anyone touches a tool."
            </p>
            <ul className="problem-list">
              <li>On-site clarification: 20–30+ min per job</li>
              <li>Overrun rate: ~25%, surfaced only by the engineer</li>
              <li>Scope creep: extras done, not charged</li>
            </ul>
          </div>

          <div className="problem-card">
            <div className="problem-card-head">
              <span className="problem-num">Stage 03</span>
              <span className="problem-tag">£18k / yr</span>
            </div>
            <h3 className="problem-h3">After the job</h3>
            <p className="problem-quote">
              "We knew the customer would call again. We just didn't have a way to make it happen."
            </p>
            <ul className="problem-list">
              <li>Repeat work: relationship-led, not systematic</li>
              <li>Maintenance reminders: ad hoc or absent</li>
              <li>Margin per job: never compared to estimate</li>
            </ul>
          </div>
        </div>

        <div className="leak-callout">
          <div className="leak-callout-num">40–60%</div>
          <div className="leak-callout-body">
            <h4>of gross margin leaks operationally on a £500k business.</h4>
            <p>Most of it is preventable through systems, not harder work. The question isn't <em>whether</em>, it's <em>which workflow</em> to fix first.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

window.TrustStrip = TrustStrip;
window.Problem = Problem;
