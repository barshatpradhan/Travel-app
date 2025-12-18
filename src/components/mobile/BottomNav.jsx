import mapicon from '../../icons/map.png'
import homeicon from '../../icons/home 02.png'
import signicon from '../../icons/signpost 03.png'
import ticketicon from '../../icons/ticket-percent.png'
import offericon from '../../icons/ticket.png'
import React from 'react';

export default function BottomNav() {
  return (
    <nav className="m-bottom-nav" aria-label="Main navigation">
      <button className="m-nav-item">
         <img src={homeicon} alt="" className="m-nav-icon" />
        <span className="m-nav-label">Home</span>
      </button>

      <button className="m-nav-item">
        <img src={signicon} alt="" className="m-nav-icon" />
        <span className="m-nav-label">Trips</span>
      </button>

      <button className="m-nav-item ">
         <img src={ticketicon} alt="" className="m-nav-icon" />
        <span className="m-nav-label">Tickets</span>
      </button>

      <button className="m-nav-item">
         <img src={offericon} alt="" className="m-nav-icon" />
        <span className="m-nav-label">Offers</span>
      </button>

      <button className="m-nav-item ">
        <img src={mapicon} alt="" className="m-nav-icon" />
        <span className="m-nav-label">Map</span>
      </button>
    </nav>
  );
}


