import React from 'react'
import TagBox from './components/TagBox'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import ServicePage from './pages/ServicePage'


const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/portfolio"  element={<PortfolioPage/>}/>
        <Route path="/service"  element={<ServicePage/>}/>
      </Route>
    </Routes>
  )
}

export default App