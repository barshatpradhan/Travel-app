
import React from 'react';
import MobileHero from './MobileHero.jsx';
import MobileSearchCard from './MobileSearchCard.jsx';
import MobileDestinations from './MobileDestinations.jsx';
import BottomNav from './BottomNav.jsx';

export default function MobileHome() {
  return (
    <div className="mobile-home">
      <div className="mobile-shell">
        <MobileHero />

        <main className="mobile-main">
          <MobileSearchCard />
          <MobileDestinations />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
