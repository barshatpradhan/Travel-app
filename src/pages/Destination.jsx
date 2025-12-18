import { useEffect, useState } from "react";
import DesktopDestination from "../components/desktop/destination/DesktopDestination";
import MobileDestination from "../components/mobile/destination/MobileDestination";

export default function Destination() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile ? <MobileDestination /> : <DesktopDestination />;
}


