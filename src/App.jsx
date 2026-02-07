// import { useState,useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
// import Container from './components/Container'
// import Header from './components/Header/Header'

// function App() {
//   const [count, setCount] = useState(0)
  
//   return (
//  <div className="app-main-wrapper">
//       {/* If your team gave you a Header component, put it here */}
//       <Header />
      
      
//       <main>
//         <Container>
//           <Outlet /> 
//           {/* Outlet is where the Dashboard, Login, or Signup will appear */}
//         </Container>
//       </main>

//       {/* If your team gave you a Footer component, put it here */}
//     </div>
//   )
// }

// export default App



import { Outlet } from 'react-router-dom'
import Container from './components/Container'
import Header from './components/Header/Header'

function App() {
  // later you can replace this with real auth state
  const userStatus = false

  return (
    <div className="app-main-wrapper">
      <Header userStatus={userStatus} />

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default App