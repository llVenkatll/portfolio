import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const handleClick = () => setNav(!nav)

  return (
    <nav className="fixed w-full h-20 shadow-lg z-50 transition-colors duration-300 bg-primary-theme/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="text-accent-theme">Venkatesh</span>
            <span className="text-primary-theme">.dev</span>
          </h1>
        </motion.div>

        {/* Menu */}
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex gap-8"
        >
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#timeline" className="nav-link">Professional Journey</a></li>
          <li><a href="#extras" className="nav-link">Extras</a></li>
        </motion.ul>

        {/* Theme Toggle & Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-4"
        >
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-300 text-secondary-theme hover:text-accent-theme hover:bg-secondary-theme/20"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Social Icons */}
          <a 
            href="https://github.com/llVenkatll" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/venkatesh-meenakshinathan-a60a88249/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:venkat011003@gmail.com"
            className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
          >
            <MdEmail size={24} />
          </a>
        </motion.div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-300 text-secondary-theme hover:text-accent-theme"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <div onClick={handleClick} className="z-10 cursor-pointer">
            {!nav ? <FaBars size={24} className="text-primary-theme" /> : <FaTimes size={24} className="text-primary-theme" />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={
          nav 
            ? 'md:hidden fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out bg-primary-theme'
            : 'md:hidden fixed top-0 left-[-100%] w-full h-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out bg-primary-theme'
        }>
          <ul className="flex flex-col gap-8 text-center">
            <li className="py-2 text-xl">
              <a onClick={handleClick} href="#about" className="nav-link">About</a>
            </li>
            <li className="py-2 text-xl">
              <a onClick={handleClick} href="#education" className="nav-link">Education</a>
            </li>
            <li className="py-2 text-xl">
              <a onClick={handleClick} href="#experience" className="nav-link">Experience</a>
            </li>
            <li className="py-2 text-xl">
              <a onClick={handleClick} href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="py-2 text-xl">
              <a onClick={handleClick} href="#timeline" className="nav-link">Professional Journey</a>
            </li>
            <li className="py-2 text-xl">
              <a onClick={handleClick} href="#extras" className="nav-link">Extras</a>
            </li>
          </ul>
          
          {/* Mobile Social Icons */}
          <div className="flex gap-6 mt-12">
            <a 
              href="https://github.com/llVenkatll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a 
              href="https://www.linkedin.com/in/venkatesh-meenakshinathan-a60a88249/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a 
              href="mailto:venkat011003@gmail.com"
              className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
            >
              <MdEmail size={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
