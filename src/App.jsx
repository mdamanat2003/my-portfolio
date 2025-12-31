import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: darkMode ? '#020617' : '#ffffff', color: darkMode ? '#CBD5E1' : '#000000'}}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="px-6">
          <Routes>
            <Route path="/" element={<><Hero /><About /><Skills /><Projects /><Contact /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default App
