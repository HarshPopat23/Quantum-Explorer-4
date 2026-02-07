// import React from 'react'
// import { Link } from 'react-router-dom'
// import Container from '../Container'
// import styles from './Footer.module.css'

// function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <Container>
//         <div className={styles.footerTop}>
//           {/* Brand Section */}
//           <div className={styles.brandCol}>
//             <div className={styles.logo}>
//               <span className={styles.icon}>📖</span> QEconsePta
//             </div>
//             <p className={styles.brandDesc}>
//               Empowering students with AI-powered learning tools and comprehensive educational resources for academic success.
//             </p>
//             <div className={styles.contactInfo}>
//               <p><span>📧</span> hello@eduspark.com</p>
//               <p><span>📞</span> +1 (234) 567-890</p>
//               <p><span>📍</span> San Francisco, CA</p>
//             </div>
//           </div>

//           {/* Links Columns */}
//           <div className={styles.linksCol}>
//             <h4>Product</h4>
//             <ul>
//               <li><Link to="/">Features</Link></li>
//               <li><Link to="/">Resources</Link></li>
//               <li><Link to="/">Quizzes</Link></li>
//               <li><Link to="/">AI Bot</Link></li>
//               <li><Link to="/">Pricing</Link></li>
//             </ul>
//           </div>

//           <div className={styles.linksCol}>
//             <h4>Company</h4>
//             <ul>
//               <li><Link to="/">About Us</Link></li>
//               <li><Link to="/">Careers</Link></li>
//               <li><Link to="/">Blog</Link></li>
//               <li><Link to="/">Press</Link></li>
//               <li><Link to="/">Partners</Link></li>
//             </ul>
//           </div>

//           <div className={styles.linksCol}>
//             <h4>Support</h4>
//             <ul>
//               <li><Link to="/">Help Center</Link></li>
//               <li><Link to="/">Contact</Link></li>
//               <li><Link to="/">FAQ</Link></li>
//               <li><Link to="/">Community</Link></li>
//               <li><Link to="/">Status</Link></li>
//             </ul>
//           </div>
//         </div>

//         <hr className={styles.divider} />

//         <div className={styles.footerMiddle}>
//           <div className={styles.legalSection}>
//             <h4>Legal</h4>
//             <ul>
//               <li><Link to="/">Privacy Policy</Link></li>
//               <li><Link to="/">Terms of Service</Link></li>
//               <li><Link to="/">Cookie Policy</Link></li>
//             </ul>
//           </div>
//         </div>

//         <div className={styles.footerBottom}>
//           <p>© 2026 EduSpark. All rights reserved.</p>
//           <div className={styles.socialLinks}>
//             <a href="#" aria-label="Twitter">Twitter</a>
//             <a href="#" aria-label="LinkedIn">LinkedIn</a>
//             <a href="#" aria-label="YouTube">YouTube</a>
//             <a href="#" aria-label="Instagram">Instagram</a>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   )
// }

// export default Footer


import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand & About - Now given more space */}
          <div className={styles.brandSection}>
            <div className={styles.brand}>
              <div className={styles.icon}>📘</div>
              <span className={styles.brandName}>QEconsePta</span>
            </div>

            <p className={styles.description}>
              Empowering students with AI-powered learning tools and a unified
              academic second brain for deeper understanding and stress-free
              revision.
            </p>

            <div className={styles.contact}>
              <a href="mailto:hello@qeconcepta.com">hello@qeconcepta.com</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
              <span>IIIT Kota, India</span>
            </div>
          </div>

          {/* Nav Columns */}
          <div className={styles.navColumn}>
            <h4 className={styles.heading}>Product</h4>
            <ul className={styles.list}>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Resources</Link></li>
              <li><Link to="/">Smart Videos</Link></li>
              <li><Link to="/">AI Second Brain</Link></li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.list}>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h4 className={styles.heading}>Support</h4>
            <ul className={styles.list}>
              <li><Link to="/">Help Center</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h4 className={styles.heading}>Legal</h4>
            <ul className={styles.list}>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} QEconsePta. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;