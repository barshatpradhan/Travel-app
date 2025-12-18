
import React from 'react';

function InputBlock({ label, title, subtitle, right }) {
  return (
    <div className="input-block">
      <div>
        <div className="input-label">{label}</div>
        <div className="input-title">{title}</div>
        {subtitle && <div className="input-sub">{subtitle}</div>}
      </div>
      <div style={{marginLeft:12}}>{ right ? <span style={{fontSize:14, color:'#9ca3af'}}>+</span> : <span style={{fontSize:14, color:'#9ca3af'}}>✈</span> }</div>
    </div>
  );
}

export default function SearchCard(){
  return (
    <div className="search-card card" role="region" aria-label="flight search" >
      {/* top pills row (radio style) */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:18,marginTop:'11px',marginBottom:'28px'}}>
        <label style={{display:'flex', alignItems:'center', gap:8}}>
          <input type="radio" defaultChecked />
          <span style={{fontWeight:700}}>One Way</span>
        </label>
        <label style={{display:'flex', alignItems:'center', gap:8}}>
          <input type="radio" />
          <span>Round Trip</span>
        </label>
        <label style={{display:'flex', alignItems:'center', gap:8}}>
          <input type="radio" />
          <span>Multi City</span>
        </label>

        <div style={{marginLeft:'auto', color:'#8b8b8b'}}>Book International and Domestic Flights</div>
      </div>

      {/* main wide inputs box */}
      <div className="search-main">
        <InputBlock label="From" title="Pakyong PKG" subtitle="PKG, Pakyong Domestic-SK" />
        <InputBlock label="To" title="Delhi" subtitle="DEL, New Delhi - DL" />
        <InputBlock label="Departure" title="13 Nov'25" subtitle="Thursday" />
        <InputBlock label="Return" title="Tap to add a return date for bigger discounts" />
        <InputBlock label="Travellers & Class" title="1 Traveller" subtitle="Thursday" />
      </div>

      {/* special fares row */}
      <div className="special-fares">
        <div className="fare-title">SPECIAL FARES</div>
        <div className="fare-list">
          <div className="fare-item active">
            <div className="fare-main">Regular</div>
            <div className="fare-sub">Regular fares</div>
          </div>
          <div className="fare-item">
            <div className="fare-main">Student</div>
            <div className="fare-sub">Extra discounts/baggage</div>
          </div>
          <div className="fare-item">
            <div className="fare-main">Armed Forces</div>
            <div className="fare-sub">Up to $50 off</div>
          </div>
          <div className="fare-item">
            <div className="fare-main">Doctor and Nurses</div>
            <div className="fare-sub">Up to $50 off</div>
          </div>

          <div style={{marginLeft:'auto'}}>
            <button className="btn-ghost" style={{padding:'10px 14px', borderRadius:8}}>Flight Tracker</button>
          </div>
        </div>
      </div>
      <div className="search-action">
  <button className="btn-search">SEARCH</button>
</div>

    </div>
    
  );
}


// {/* centered search button */}
//       {/* <div style={{display:'flex', justifyContent:'center', marginTop:18}}> */}
//       <div style={{display:'flex', justifyContent:'center', marginTop:18}}>
//         <button className="btn-search">SEARCH</button>
//       </div>