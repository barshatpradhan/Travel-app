
import React, { useState } from 'react';

function FieldRow({ icon, label, main, sub, alignTop }) {
  return (
    <div className="m-field-row">
      <div className="m-field-icon">{icon}</div>
      <div className={`m-field-text ${alignTop ? 'm-field-text-top' : ''}`}>
        <div className="m-field-label">{label}</div>
        <div className="m-field-main">{main}</div>
        {sub && <div className="m-field-sub">{sub}</div>}
      </div>
    </div>
  );
}

export default function MobileSearchCard() {
  const [tripType, setTripType] = useState('one');

  return (
    <section className="m-search-card">
      {/* trip type tabs */}
      <div className="m-trip-tabs">
        <button
          className={`m-trip-tab ${tripType === 'one' ? 'active' : ''}`}
          onClick={() => setTripType('one')}
        >
          ONE WAY
        </button>
        <button
          className={`m-trip-tab ${tripType === 'round' ? 'active' : ''}`}
          onClick={() => setTripType('round')}
        >
          ROUND TRIP
        </button>
        <button
          className={`m-trip-tab ${tripType === 'multi' ? 'active' : ''}`}
          onClick={() => setTripType('multi')}
        >
          MULTI CITY
        </button>
      </div>

      <FieldRow
        icon="🛫"
        label="FROM"
        main="Pakyong PKG"
        sub="Pakyong Domestic-SK"
      />

      <FieldRow
        icon="🛬"
        label="TO"
        main="Kolkata CCU"
        sub="Netaji Subash Chandra Bose…WB"
      />

      <FieldRow
        icon="📅"
        label="DEPARTURE DATE"
        main="08 APR Fri, 2025"
      />

      <div className="m-field-row m-field-row-split">
        <div className="m-field-text">
          <div className="m-field-label">+ADD RETURN DATE</div>
          <div className="m-field-sub m-field-sub-strong">
            SAVE MORE ON ROUND TRIPS!
          </div>
        </div>
      </div>

      <FieldRow
        icon="👤"
        label="TRAVELLERS & CLASS"
        main="1 Economy/Premium Economy"
        alignTop
      />

      <button className="m-search-btn">SEARCH</button>
    </section>
  );
}
