import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigtion'
import Home from './components/home'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  const homeStyles = {
    display:'flex', // cant use textAlign: center because it only affects 
    // inline content (like text and images) but not block-level components.
    //  so need to use display: flex
    justifyContent: 'center',// Centers horizontally
    alignItems: 'center',    // Centers vertically
    minHeight: '80vh'// The height the container spans of the viewport height
    //if it was 100vh then it will span the height of the entire viewport
  }
  return (
    <>
      <Navigation/>
      <div style={homeStyles}>
             <Home/>
      </div>
      <Footer/>
     
    </>
  )
}

export default App
