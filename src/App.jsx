 import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Footer from './Footer'
import Register from './Register'

function App() {
 
  return (
    <div>
      <Nav></Nav>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default App
