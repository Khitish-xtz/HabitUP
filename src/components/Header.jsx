import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoginModal from './LoginModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-500/90 backdrop-blur-sm transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center text-white no-underline">
            <h1 className="text-xl sm:text-2xl font-bold font-raleway m-0">HabitUP</h1>
            <span className="text-accent-400 text-xl sm:text-2xl font-bold">.</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-white text-2xl p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>

          {/* Navigation */}
          <nav className={`
            lg:flex lg:items-center lg:static lg:bg-transparent lg:shadow-none lg:p-0
            ${isMenuOpen ? 'block' : 'hidden'}
            absolute top-full left-0 right-0 bg-white shadow-lg p-4 lg:p-0 max-h-screen overflow-y-auto
          `}>
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 xl:space-x-8 space-y-2 lg:space-y-0 list-none m-0 p-0">
              <li>
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded transition-colors duration-300 font-poppins text-sm lg:text-base ${
                    isActive('/') || isActive('/home')
                      ? 'text-accent-400 lg:text-accent-400' 
                      : 'text-primary-500 lg:text-white hover:text-accent-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded transition-colors duration-300 font-poppins text-sm lg:text-base ${
                    isActive('/about') 
                      ? 'text-accent-400 lg:text-accent-400' 
                      : 'text-primary-500 lg:text-white hover:text-accent-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`block px-3 py-2 rounded transition-colors duration-300 font-poppins text-sm lg:text-base ${
                    isActive('/services') 
                      ? 'text-accent-400 lg:text-accent-400' 
                      : 'text-primary-500 lg:text-white hover:text-accent-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`block px-3 py-2 rounded transition-colors duration-300 font-poppins text-sm lg:text-base ${
                    isActive('/blog') 
                      ? 'text-accent-400 lg:text-accent-400' 
                      : 'text-primary-500 lg:text-white hover:text-accent-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={`block px-3 py-2 rounded transition-colors duration-300 font-poppins text-sm lg:text-base ${
                    isActive('/dashboard') 
                      ? 'text-accent-400 lg:text-accent-400' 
                      : 'text-primary-500 lg:text-white hover:text-accent-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming"
                  className={`block px-3 py-2 rounded transition-colors duration-300 font-poppins text-sm lg:text-base ${
                    isActive('/upcoming') 
                      ? 'text-accent-400 lg:text-accent-400' 
                      : 'text-primary-500 lg:text-white hover:text-accent-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <button
            className="hidden lg:block bg-transparent border-2 border-accent-400 text-white px-4 lg:px-6 py-2 rounded-full transition-all duration-300 hover:bg-accent-400 hover:text-primary-500 font-medium text-sm lg:text-base"
            onClick={() => setIsLoginModalOpen(true)}
          >
            <span className="hidden xl:inline">Login / Signup</span>
            <span className="xl:hidden">Login</span>
          </button>
        </div>

        {/* Mobile Nav Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={toggleMenu}
            style={{ zIndex: -1 }}
          ></div>
        )}
        
        {/* Mobile Login Button */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4">
            <button
              className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              onClick={() => {
                setIsLoginModalOpen(true)
                setIsMenuOpen(false)
              }}
            >
              Login / Signup
            </button>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  )
}

export default Header