// src/hooks/useIsMobile.js
import { useState, useEffect } from 'react';

export default function useIsMobile(breakpoint = 425) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return isMobile;
}
