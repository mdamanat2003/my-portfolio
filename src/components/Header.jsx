// src/components/Header.jsx
import  { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed w-full z-50 shadow-sm" style={{backgroundColor: darkMode ? 'rgba(2, 6, 23, 0.9)' : 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)'}}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" style={{color: darkMode ? '#14B8A6' : '#007bff'}}>
          My Portfolio
        </Link>

                <nav className="flex items-center px-6 py-4">
                      <div className="hidden md:flex space-x-8">
                        <Link to="/about" style={{color: darkMode ? '#CBD5E1' : '#000000'}}><b>About</b></Link>
                        <Link to="/skills" style={{color: darkMode ? '#CBD5E1' : '#000000'}}><b>Skills</b></Link>
                        <Link to="/projects" style={{color: darkMode ? '#CBD5E1' : '#000000'}}><b>Projects</b></Link>
                        <Link to="/contact" style={{color: darkMode ? '#CBD5E1' : '#000000'}}><b>Contact</b></Link>
                      </div>
                </nav>


        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full"
            style={{backgroundColor: darkMode ? '#CBD5E1' : '#000000'}}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{color: darkMode ? '#CBD5E1' : '#000000'}}
          >
            ☰
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-lg" style={{backgroundColor: darkMode ? '#020617' : '#ffffff'}}>
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link to="/about" style={{color: darkMode ? '#CBD5E1' : '#000000'}}>About</Link>
            <Link to="/skills" style={{color: darkMode ? '#CBD5E1' : '#000000'}}>Skills</Link>
            <Link to="/projects" style={{color: darkMode ? '#CBD5E1' : '#000000'}}>Projects</Link>
            <Link to="/contact" style={{color: darkMode ? '#CBD5E1' : '#000000'}}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header