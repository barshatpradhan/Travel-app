
// src/pages/Home.jsx
import React from 'react';
import useIsMobile from '../../hooks/useIsMobile.js';

// === Desktop pieces (your existing desktop layout pieces) ===
import Hero from '../components/desktop/Hero.jsx';
import OffersGrid from '../components/desktop/OffersGrid.jsx';
import DestinationsGrid from '../components/desktop/DestinationsGrid.jsx';
import WhySection from '../components/desktop/WhySection.jsx';
import Footer from '../components/desktop/Footer.jsx';

// === Mobile page (we will render this when isMobile is true) ===
import MobileHome from '../components/mobile/MobileHome.jsx';

export default function Home(){
  const isMobile = useIsMobile(425); // breakpoint: <=768px will use mobile

  if (isMobile) {
    // Render the mobile-optimized page
    return <MobileHome />;
  }

  // Desktop layout (your existing layout kept as-is)
  return (
    <div>
      <Hero />

      <main className="container">
        <OffersGrid />
        <DestinationsGrid />
        <WhySection />

        <h2 className="h1">Home placeholder</h2>
        <p className="text-muted">Aage components step-by-step add karenge — search card, offers, destinations.</p>
      </main>

      <Footer />
      <div className="spacer" />
    </div>
  );
}
