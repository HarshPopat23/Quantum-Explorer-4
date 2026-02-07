import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { authService } from '../../appwrite/auth'
import Container from '../Container'
import styles from './Header.module.css'

function Header({ userStatus }) {
  const navigate = useNavigate()
  const location = useLocation() // To check if we are already on the Home page

  const logoutHandler = () => {
    authService.logout().then(() => {
      navigate('/login')
    })
  }

  const handleNavClick = (item) => {
    // 1. HOME LOGIC: Scroll to top
    if (item.name === 'Home') {
      if (location.pathname === '/') {
        // If already home, smooth scroll to the very top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // If elsewhere, go home
        navigate('/');
      }
    } 
    // 2. FEATURES LOGIC: Scroll to section
    else if (item.name === 'Features') {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for page load before scrolling
        setTimeout(() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // 3. DEFAULT LOGIC: Navigate to slug
    else {
      navigate(item.slug);
    }
  };

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: 'Features', slug: "#features", active: true }, // Changed slug to ID
    { name: 'Vision', slug: "/vision", active: true },
    { name: 'Login', slug: "/login", active: !userStatus },
    { name: 'Signup', slug: "/signup", active: !userStatus },
    { name: 'Dashboard', slug: "/dashboard", active: userStatus },
  ]

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">🧠 QEconsePta</Link>
          </div>

          <ul className={styles.navList}>
            {navItems.map((item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item)} // Use the new handler
                    className={styles.navBtn}
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
            {userStatus && (
              <li>
                <button onClick={logoutHandler} className={styles.logoutBtn}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header