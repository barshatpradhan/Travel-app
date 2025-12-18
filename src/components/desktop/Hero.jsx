
import React from 'react';
import SearchCard from './SearchCard';
import heroImg from '../../assets/9579893.avif';
import logoImg from '../../assets/logo_3.png';
import { Link } from 'react-router-dom';


import flightIcon from '../../icons/flight.png';
import trainIcon from '../../icons/train.png';
import busIcon from '../../icons/bus.png';
import hotelIcon from '../../icons/hotel.png';
import homestayIcon from '../../icons/homestay.png';
import cabIcon from '../../icons/cab.png';
import toursIcon from '../../icons/tours.png';
import holidayIcon from '../../icons/holiday.png';

const categories = [
  { name: 'Flight', icon: flightIcon },
  { name: 'Train', icon: trainIcon },
  { name: 'Bus', icon: busIcon },
  { name: 'Hotel', icon: hotelIcon },
  { name: 'Homestay', icon: homestayIcon },
  { name: 'Cab', icon: cabIcon },
  { name: 'Tours', icon: toursIcon },
  { name: 'Holiday', icon: holidayIcon }
];

export default function Hero(){
  return (
  <section className="hero">
  <div
    className="hero-bg"
    style={{ backgroundImage: `url(${heroImg})` }}
  />

  <div className="hero-content container">

    {/* HEADER */}
    <div className="hero-row">
      <div className="logo-wrap">
  <img
    src={logoImg}
    alt="Aerotrav Logo"
    className="hero-logo"
  />
</div>

      <div className="hero-actions">
        <Link to="/login">
  <button className="btn-ghost">Login / Create Account</button>
</Link>

        <select>
          <option>INR</option>
        </select>
      </div>
    </div>

    {/* CATEGORY FLOAT */}
    <div className="category-float">
      <div className="category-rect">
        <div className="category-list">
          {categories.map(({ name, icon }) => (
            <div key={name} className="category-pill-rect">
              <div className="category-thumb-rect">
                <img 
                  src={icon} 
                  alt={`${name} icon`}
                />
              </div>
              <div className="category-label-rect">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* SEARCH CARD */}
    <div className="search-float">
      <SearchCard />
    </div>

  </div>
</section>

  );
}
