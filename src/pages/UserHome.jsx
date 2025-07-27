import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const UserHome = () => {
  const { user } = useAuth()
  const heroRef = useRef(null)
  const videosRef = useRef(null)
  const pricingRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const videosInView = useInView(videosRef, { once: true, margin: "-100px" })
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" })

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const habitVideos = [
    {
      id: 1,
      title: 'The Psychology of Habits',
      description: 'Understand how habits form in your brain and how to rewire them effectively.',
      duration: '02:39',
      thumbnail: '/img/ThumbnailLearnig.png',
      url: 'https://drive.google.com/file/d/1t75UEcqnVnO9viGt90YtYRAOqRois5gg/preview'
    },
    {
      id: 2,
      title: 'Learning Hypnosis',
      description: 'Create a powerful mind using hypnosis for daily success.',
      duration: '00:58',
      thumbnail: '/img/ThumbnailLearnig.png',
      url: 'https://drive.google.com/file/d/1peINiv5delayaRicbdwjklpdR6VQptPK/preview'
    },
    {
      id: 3,
      title: 'Breaking Bad Habits',
      description: 'Proven strategies to eliminate negative patterns from your life.',
      duration: '01:00',
      thumbnail: '/img/ThumbnailLearnig.png',
      url: 'https://drive.google.com/file/d/1poyMuq8YnE8UbCgla5kioz5Mj8Ckpz8W/preview'
    },
    {
      id: 4,
      title: 'Habit Stacking Secrets',
      description: 'Combine multiple habits for maximum efficiency and compounding results.',
      duration: '02:23',
      thumbnail: '/img/ThumbnailLearnig.png',
      url: 'https://drive.google.com/file/d/1peYISaYDhFJn1q3YD9x0RVLIMyhbHGfn/preview'
    },
    {
      id: 5,
      title: 'Advanced Habit Formation',
      description: 'Take your habit-building skills to the next level with neuroscience-backed techniques.',
      duration: '25:12',
      thumbnail: '/img/ThumbnailLearnig.png',
      locked: user?.subscriptionType === 'Free'
    },
    {
      id: 6,
      title: 'Habit Tracking Systems',
      description: 'Discover the most effective systems to track and maintain your habits long-term.',
      duration: '19:45',
      thumbnail: '/img/ThumbnailLearnig.png',
      locked: user?.subscriptionType === 'Free'
    },
    {
      id: 7,
      title: 'Mindfulness & Habits',
      description: 'How mindfulness can supercharge your habit formation process.',
      duration: '21:08',
      thumbnail: '/img/ThumbnailLearnig.png',
      locked: user?.subscriptionType === 'Free'
    },
    {
      id: 8,
      title: 'Habit Resilience',
      description: 'How to maintain your habits even during challenging times and setbacks.',
      duration: '17:55',
      thumbnail: '/img/ThumbnailLearnig.png',
      locked: user?.subscriptionType === 'Free'
    },
    {
      id: 9,
      title: 'Lifetime Habit Mastery',
      description: 'The ultimate guide to making habits stick for a lifetime of success.',
      duration: '28:40',
      thumbnail: '/img/ThumbnailLearnig.png',
      locked: user?.subscriptionType === 'Free'
    }
  ]

  return (
    <div className="pt-16 sm:pt-20 bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Hero Section - Enhanced User Display */}
      <section ref={heroRef} className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-accent-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-accent-400/30 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Welcome Message */}
              <div className="mb-6">
                <motion.div
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">You're doing great!</span>
                </motion.div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-raleway">
                  Welcome Back,
                  <span className="block text-accent-400 mt-2">{user?.name || 'Champion'}!</span>
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Ready to continue your <span className="text-accent-400 font-semibold">transformation journey</span>?
                Let's build habits that last a lifetime.
              </p>

              {/* Enhanced Stats Display */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-400 mb-1">
                      {user?.completedHabits || 12}
                    </div>
                    <div className="text-sm text-white/80">Habits Completed</div>
                  </div>
                  <div className="text-center border-l border-r border-white/20">
                    <div className="text-3xl font-bold text-accent-400 mb-1">
                      {user?.currentStreak || 7}
                    </div>
                    <div className="text-sm text-white/80">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-400 mb-1">
                      {user?.subscriptionType === 'Premium' ? '9' : '4'}
                    </div>
                    <div className="text-sm text-white/80">Videos Unlocked</div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#learning"
                  className="group bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    <i className="bi bi-play-circle mr-2 text-lg"></i>
                    Start Learning
                    <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </motion.a>
                <motion.a
                  href="#subscription"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    <i className="bi bi-star mr-2 text-lg"></i>
                    Unlock Premium
                    <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/img/HabitTracker.png"
                  alt="Habit Tracker"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-accent-400 text-primary-500 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  +{user?.subscriptionType === 'Premium' ? '9' : '4'}
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white text-primary-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <i className="bi bi-check-circle text-lg"></i>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor Spotlight */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-500">
              Mentor Spotlight: Dr. Sashi Bhusan Nayak
            </h2>
            <p className="text-gray-600 mb-8">
              Watch as Dr. Nayak demonstrates live hypnotism at GIET University, Gunupur — inspiring young minds
              through the power of focus and mental discipline.
            </p>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/Z7jYfYdam9I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>      {
/* Habit Mastery Videos */}
      <section ref={videosRef} id="learning" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={videosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-500">
              Habit Mastery Videos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertly crafted video lessons will guide you through the science and practice of building lasting habits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {habitVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={videosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {video.id}
                  </div>
                  {video.locked && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <i className="bi bi-lock text-lg"></i>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-yellow-600">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  <div className="flex items-center text-primary-500 text-sm font-medium">
                    <i className="bi bi-clock mr-2"></i>
                    {video.duration}
                  </div>
                  {video.url && !video.locked && (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                    ></a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Subscription Plans */}
      <section ref={pricingRef} id="subscription" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-20 animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full px-6 py-2 mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <i className="bi bi-star-fill mr-2"></i>
              <span className="font-semibold">Unlock Your Potential</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Choose Your Transformation Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful habit builders and unlock your full potential with our expertly designed programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan - Enhanced */}
            <motion.div
              className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Plan Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  STARTER
                </div>
              </div>

              <div className="text-center mb-8 pt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-gift text-2xl text-primary-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">Free Plan</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ₹0 <span className="text-lg font-normal text-gray-500">/month</span>
                </div>
                <p className="text-gray-500 text-sm">Perfect to get started</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-white text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-700 font-medium">4 Essential Learning Videos</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-white text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Basic Habit Tracking Tools</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-white text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-700 font-medium">WhatsApp Community Access</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg opacity-60">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-x text-white text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-500">Premium Video Library</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg opacity-60">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-x text-white text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-500">Advanced Analytics Dashboard</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg opacity-60">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-x text-white text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-500">1-on-1 Coaching Sessions</span>
                </div>
              </div>

              <button
                className="w-full py-4 px-6 border-2 border-primary-500 text-primary-500 rounded-full font-bold text-lg opacity-50 cursor-not-allowed relative overflow-hidden"
                disabled
              >
                <span className="relative z-10">Current Plan</span>
              </button>
            </motion.div>

            {/* Premium Plan - Enhanced */}
            <motion.div
              className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105"
              initial={{ opacity: 0, x: 30 }}
              animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  🔥 MOST POPULAR
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>

              <div className="text-center mb-8 pt-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-crown-fill text-2xl text-yellow-300"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold mb-2">
                  ₹59 <span className="text-lg font-normal text-white/80">/month</span>
                </div>
                <p className="text-white/80 text-sm">Transform your life completely</p>
              </div>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-teal-600 text-sm font-bold"></i>
                  </div>
                  <span className="font-medium">All 9 Learning Videos Unlocked</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-teal-600 text-sm font-bold"></i>
                  </div>
                  <span className="font-medium">Advanced Habit Tracking & Analytics</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-teal-600 text-sm font-bold"></i>
                  </div>
                  <span className="font-medium">Priority Support & Guidance</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-teal-600 text-sm font-bold"></i>
                  </div>
                  <span className="font-medium">Premium Analytics Dashboard</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-teal-600 text-sm font-bold"></i>
                  </div>
                  <span className="font-medium">Exclusive Habit Library</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <i className="bi bi-check text-teal-600 text-sm font-bold"></i>
                  </div>
                  <span className="font-medium">1-on-1 Coaching Sessions</span>
                </div>
              </div>

              <motion.button
                className="w-full py-4 px-6 bg-white text-teal-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="bi bi-rocket-takeoff mr-2"></i>
                  Upgrade Now
                  <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>

              {/* Special Offer Badge */}
              <div className="text-center mt-4 relative z-10">
                <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                  <i className="bi bi-lightning-fill mr-1"></i>
                  Limited Time: Save 40%
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center">
                <i className="bi bi-shield-check text-green-500 mr-2"></i>
                <span className="text-sm">30-Day Money Back</span>
              </div>
              <div className="flex items-center">
                <i className="bi bi-people text-blue-500 mr-2"></i>
                <span className="text-sm">10,000+ Happy Users</span>
              </div>
              <div className="flex items-center">
                <i className="bi bi-star-fill text-yellow-500 mr-2"></i>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <i className="bi bi-clock text-purple-500 mr-2"></i>
                <span className="text-sm">Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Join Coaching Session */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg">
              <i className="bi bi-camera-video mr-2"></i>
              <span className="font-semibold">Live Coaching</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-500">
              Join Your Coaching Session
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ready for your personalized coaching session? Simply paste your meeting link below and join your mentor for a transformative experience.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Meeting Link Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <i className="bi bi-link-45deg mr-2 text-blue-500"></i>
                Meeting Link
              </label>
              <div className="relative">
                <input
                  type="url"
                  placeholder="Paste your meeting link here (e.g., https://meet.google.com/abc-defg-hij or https://zoom.us/j/123456789)"
                  className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
                <i className="bi bi-camera-video absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg"></i>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Your mentor will provide the meeting link via email before the session
              </p>
            </div>

            {/* Join Button */}
            <motion.button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                <i className="bi bi-play-circle mr-3 text-xl"></i>
                Join Coaching Session
                <i className="bi bi-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </motion.button>

            {/* Session Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-clock text-blue-600 text-lg"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Session Duration</h4>
                <p className="text-sm text-gray-600">45-60 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-person-check text-purple-600 text-lg"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Session Type</h4>
                <p className="text-sm text-gray-600">1-on-1 Coaching</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-shield-check text-green-600 text-lg"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Secure & Private</h4>
                <p className="text-sm text-gray-600">End-to-end encrypted</p>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <i className="bi bi-lightbulb text-yellow-600 mr-2"></i>
                Quick Preparation Tips
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <i className="bi bi-check-circle text-green-500 mr-2"></i>
                  Test your camera and microphone beforehand
                </li>
                <li className="flex items-center">
                  <i className="bi bi-check-circle text-green-500 mr-2"></i>
                  Find a quiet, well-lit space for the session
                </li>
                <li className="flex items-center">
                  <i className="bi bi-check-circle text-green-500 mr-2"></i>
                  Have your habit goals and questions ready
                </li>
                <li className="flex items-center">
                  <i className="bi bi-check-circle text-green-500 mr-2"></i>
                  Join 2-3 minutes early to avoid technical issues
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admin Panel - Only visible to admin users */}
      {user?.role === 'admin' && (
        <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg">
                <i className="bi bi-shield-lock mr-2"></i>
                <span className="font-semibold">Admin Access</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
                Admin Dashboard
              </h2>
              <p className="text-gray-600 text-lg">
                Manage users, content, and system settings from your admin control panel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User Management */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="bi bi-people text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">User Management</h3>
                <p className="text-gray-600 mb-4">Manage user accounts, subscriptions, and permissions.</p>
                <Link
                  to="/admin/users"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Manage Users
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </motion.div>

              {/* Content Management */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="bi bi-collection-play text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Content Library</h3>
                <p className="text-gray-600 mb-4">Add, edit, and organize learning videos and materials.</p>
                <Link
                  to="/admin/content"
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Manage Content
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </motion.div>

              {/* Analytics Dashboard */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="bi bi-graph-up text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics</h3>
                <p className="text-gray-600 mb-4">View detailed analytics and user engagement metrics.</p>
                <Link
                  to="/admin/analytics"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  View Analytics
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </motion.div>

              {/* Subscription Management */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="bi bi-credit-card text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Subscriptions</h3>
                <p className="text-gray-600 mb-4">Monitor and manage user subscription plans and payments.</p>
                <Link
                  to="/admin/subscriptions"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Manage Plans
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </motion.div>

              {/* System Settings */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="bi bi-gear text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">System Settings</h3>
                <p className="text-gray-600 mb-4">Configure application settings and system preferences.</p>
                <Link
                  to="/admin/settings"
                  className="inline-flex items-center text-gray-600 font-semibold hover:text-gray-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  System Config
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </motion.div>

              {/* Support & Feedback */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="bi bi-headset text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Support Center</h3>
                <p className="text-gray-600 mb-4">Handle user support tickets and feedback management.</p>
                <Link
                  to="/admin/support"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Support Desk
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats for Admin */}
            <motion.div
              className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                  <div className="text-sm text-gray-600">Total Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">892</div>
                  <div className="text-sm text-gray-600">Premium Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
                  <div className="text-sm text-gray-600">Total Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹52,680</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

    </div>
  )
}

export default UserHome