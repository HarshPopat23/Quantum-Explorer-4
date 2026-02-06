import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)
  
  return (
 <div className="app-main-wrapper">
      {/* If your team gave you a Header component, put it here */}
      
      <main>
        <Container>
          <Outlet /> 
          {/* Outlet is where the Dashboard, Login, or Signup will appear */}
        </Container>
      </main>

      {/* If your team gave you a Footer component, put it here */}
    </div>
  )
}

export default App
