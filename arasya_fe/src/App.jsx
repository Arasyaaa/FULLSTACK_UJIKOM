import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './layout/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './template/Dashboard'
import Register from './layout/Register'
import Menu from './layout/Menu'
import Pembeli from './layout/Pembeli'
import Admin from './layout/Admin'
import LandingPage from './layout/LandingPage'
import Transaksi from './layout/Transaksi'
import GeoLocation from './landingPage/Geolocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter basename='/'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/pembeli" element={<Pembeli/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/transaksi" element={<Transaksi/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/geo" element={<GeoLocation/>} /> 
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
