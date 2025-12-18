import React from 'react';

const WhyCard = ({ title, children }) => {
  return (
    <div className="why-card card" role="article" aria-label={title}>
      <h3 className="why-title">{title}</h3>
      <p className="why-desc">{children}</p>
    </div>
  );
};

export default function WhySection() {
  return (
    <section className="why-section container" aria-labelledby="why-heading" style={{ marginTop: 36, marginBottom: 36 }}>
      <h2 id="why-heading" style={{ display: 'none' }}>Why this company</h2>

      <div className="why-grid">
        <WhyCard title="Why this Company?">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </WhyCard>

        <WhyCard title="Why Booking Flights with this company?">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </WhyCard>

        <WhyCard title="Why Planning Tours and Activities with this company?">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </WhyCard>
      </div>
    </section>
  );
}
