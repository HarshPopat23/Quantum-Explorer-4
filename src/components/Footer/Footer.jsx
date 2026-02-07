import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTop}>
          {/* Brand Section */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.icon}>📖</span> EduSpark
            </div>
            <p className={styles.brandDesc}>
              Empowering students with AI-powered learning tools and comprehensive educational resources for academic success.
            </p>
            <div className={styles.contactInfo}>
              <p>📧 hello@eduspark.com</p>
              <p>📞 +1 (234) 567-890</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className={styles.linksCol}>
            <h4>Product</h4>
            <ul>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Resources</Link></li>
              <li><Link to="/">Quizzes</Link></li>
              <li><Link to="/">AI Bot</Link></li>
              <li><Link to="/">Pricing</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Company</h4>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Press</Link></li>
              <li><Link to="/">Partners</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Support</h4>
            <ul>
              <li><Link to="/">Help Center</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Community</Link></li>
              <li><Link to="/">Status</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className={styles.legalSection}>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/">Cookie Policy</Link></li>
          </ul>
        </div>

        <hr className={styles.divider} />

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>© 2026 EduSpark. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer