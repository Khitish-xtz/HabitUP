import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from 'react-modal'

// Set the app element for accessibility
Modal.setAppElement('#root')

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    onClose()
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ email: '', password: '', name: '', phone: '' })
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.2
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mt-8 sm:mt-16 bg-primary-500 rounded-2xl p-4 sm:p-6 lg:p-8 relative outline-none shadow-2xl"
          overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 z-50 overflow-y-auto"
          closeTimeoutMS={200}
        >
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-accent-400 text-lg sm:text-xl z-20 p-2"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <i className="bi bi-x-lg"></i>
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
              {/* Left side - Welcome content */}
              <motion.div
                className="text-center lg:text-left order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4"
                >
                  <i className="fas fa-user-circle text-2xl sm:text-3xl text-primary-500"></i>
                </motion.div>

                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-accent-400 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {isLogin ? 'Welcome Back!' : 'Join HabitUP'}
                </motion.h2>

                <motion.p
                  className="text-white/80 text-base sm:text-lg mb-4 lg:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {isLogin ? 'Sign in to continue your journey' : 'Start your transformation today'}
                </motion.p>

                <motion.div
                  className="hidden lg:block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="space-y-3 text-white/70 text-sm">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check-circle text-accent-400"></i>
                      <span>Track your daily habits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check-circle text-accent-400"></i>
                      <span>Get personalized insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-check-circle text-accent-400"></i>
                      <span>Join a supportive community</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Form */}
              <motion.div
                key={isLogin ? 'login' : 'signup'}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                className="order-1 lg:order-2"
              >
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        layout
                      >
                        <label className="block text-white text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-accent-400 focus:bg-white/30 transition-all text-sm sm:text-base"
                          placeholder="Enter your full name"
                          required={!isLogin}
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div variants={inputVariants}>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-accent-400 focus:bg-white/30 transition-all text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        layout
                      >
                        <label className="block text-white text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <motion.input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-accent-400 focus:bg-white/30 transition-all text-sm sm:text-base"
                          placeholder="Enter your phone number"
                          required={!isLogin}
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div variants={inputVariants}>
                    <label className="block text-white text-sm font-medium mb-2">
                      Password
                    </label>
                    <motion.input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-accent-400 focus:bg-white/30 transition-all text-sm sm:text-base"
                      placeholder="Enter your password"
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-400 to-accent-500 text-primary-500 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(253, 193, 52, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </motion.span>
                  </motion.button>
                </form>

                <motion.div
                  className="text-center mt-4 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-white/80 text-sm sm:text-base">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <motion.button
                      onClick={toggleMode}
                      className="text-accent-400 hover:text-accent-300 font-medium underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isLogin ? 'Sign Up' : 'Sign In'}
                    </motion.button>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  )
}

export default LoginModal