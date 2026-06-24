import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import logo from '../assets/logo.png'

const Navbar = ({ isMenuOpen, setIsMenuOpen, onNavClick, activeSection }) => {
  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Technology', id: 'technology' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Gradient Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-95"></div>
      <div className="absolute inset-0 backdrop-blur-xl bg-white/5"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
      
      {/* Border Glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavClick('home')}
          >
            <div className="relative">
              <img src={logo} alt="Pahanmi Hire" className="h-14 md:h-[180px] w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
          </motion.div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => onNavClick(item.id)}
                whileHover={{ y: -2 }}
                className={`px-4 py-2 font-medium transition-colors duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-blue-300'
                    : 'text-gray-100 hover:text-blue-300'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </motion.button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Get Started Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavClick('contact')}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
              <BsArrowRight className="relative group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              className="lg:hidden p-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10 hover:border-blue-400/50"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl text-gray-100" />
              ) : (
                <FiMenu className="text-2xl text-gray-100" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden pb-6 border-t border-white/10 backdrop-blur-sm"
          >
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                  onClick={() => onNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-blue-300 bg-white/10 border-l-2 border-blue-400'
                      : 'text-gray-100 hover:text-blue-300 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick('contact')}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Get Started
                <BsArrowRight />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
