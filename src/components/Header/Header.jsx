// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { authService } from '../../appwrite/auth'
// import Container from '../Container'
// import styles from './Header.module.css'

// function Header({ userStatus }) {
//   const navigate = useNavigate()

//   const logoutHandler = () => {
//     authService.logout().then(() => {

//       navigate('/login')
//       window.location.reload() 
//     })
//   }

//   const navItems = [
//     { name: 'Home', slug: "/", active: true },
//     { name: "Login", slug: "/login", active: !userStatus },
//     { name: "Signup", slug: "/signup", active: !userStatus },
//     { name: "Dashboard", slug: "/dashboard", active: userStatus },
//   ]

//   return (
//     <header className={styles.header}>
//       <Container>
//         <nav className={styles.nav}>
//           <div className={styles.logo}>
//             <Link to='/'>EduBrain</Link>
//           </div>
//           <ul className={styles.navList}>
//             {navItems.map((item) => 
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className={styles.navBtn}
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//             {userStatus && (
//               <li>
//                 <button onClick={logoutHandler} className={styles.logoutBtn}>
//                   Logout
//                 </button>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header




import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../appwrite/auth'
import Container from '../Container'
import styles from './Header.module.css'

function Header({ userStatus }) {
  const navigate = useNavigate()

  const logoutHandler = () => {
    authService.logout().then(() => {
      navigate('/login')
    })
  }

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Features', slug: '/features', active: true }, // New Button
    { name: 'Vision', slug: '/vision', active: true },     // New Button
    { name: 'Login', slug: '/login', active: !userStatus },
    { name: 'Signup', slug: '/signup', active: !userStatus },
    { name: 'Dashboard', slug: '/dashboard', active: userStatus },
  ]

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">🧠 QEconsePta</Link>
          </div>

          <ul className={styles.navList}>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={styles.navBtn}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {userStatus && (
              <li>
                <button
                  onClick={logoutHandler}
                  className={styles.logoutBtn}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header