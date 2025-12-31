// src/components/Header.jsx
import  { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" style={{color: '#14B8A6'}}>
          My Portfolio
        </Link>

                <nav className="flex items-center px-6 py-4">
                      <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
                        <Link to="/about" style={{color: '#CBD5E1'}}><b>About</b></Link>
                        <Link to="/skills" style={{color: '#CBD5E1'}}><b>Skills</b></Link>
                        <Link to="/projects" style={{color: '#CBD5E1'}}><b>Projects</b></Link>
                        <Link to="/contact" style={{color: '#CBD5E1'}}><b>Contact</b></Link>
                      </div>
                </nav>


        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400" style={{color: '#CBD5E1'}}>About</Link>
            <Link to="/skills" className="hover:text-indigo-600 dark:hover:text-indigo-400" style={{color: '#CBD5E1'}}>Skills</Link>
            <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400" style={{color: '#CBD5E1'}}>Projects</Link>
            <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400" style={{color: '#CBD5E1'}}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header