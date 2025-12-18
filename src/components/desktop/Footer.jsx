// import { CiInstagram } from "react-icons/ci";
// import { IoLogoFacebook } from "react-icons/io";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaWhatsappSquare } from "react-icons/fa";
// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="site-footer" role="contentinfo">
//       <div className="footer-inner container">
//         <div className="footer-left">
//           <div className="footer-icons">
//             <div><CiInstagram size={40} /></div>
//             <div><IoLogoFacebook size={40} /></div>
//             <div><FaSquareXTwitter size={35} /></div>
//             <div><FaWhatsappSquare  size={35}/></div>
//           </div>
//         </div>
       
//         <div className="footer-right">
//           <div className="copyright">Copyright 2025 Company Pvt. Ltd</div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from 'react';

import instagramIcon from '../../icons/instagram.png';
import facebookIcon from '../../icons//facebook.png';
import twitterIcon from '../../icons/x.png';
import whatsappIcon from '../../icons/youtube.png';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner container">
        <div className="footer-left">
          <div className="footer-icons">
            <div>
              <img src={instagramIcon} alt="Instagram" className="footer-icon" />
            </div>
            <div>
              <img src={facebookIcon} alt="Facebook" className="footer-icon" />
            </div>
            <div>
              <img src={twitterIcon} alt="Twitter" className="footer-icon" />
            </div>
            <div>
              <img src={whatsappIcon} alt="WhatsApp" className="footer-icon" />
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="copyright">
            Copyright 2025 Company Pvt. Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
