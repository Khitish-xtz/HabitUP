import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import AOS from 'aos'
import 'swiper/css'
import 'swiper/css/pagination'
import 'aos/dist/aos.css'

const Upcoming = () => {
  const [activeTab, setActiveTab] = useState('community')
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const testimonialImages = [
    'sanchita shetty qoute.png',
    'smriti kuchal new quote.png',
    'Benedict baba quote.png',
    'yogendra singh yadabv quote.png',
    'Dr. sidhartha nayak quote.png',
    'victoria quote.png',
    'Dr. dipak ranjan das quote.png',
    'Axel quote.png',
    'dr. dibyadrashan sahoo quote.png',
    'Khemeswar agasti quote.png'
  ]

  const features = {
    community: {
      title: 'Community Support',
      description: 'Connect with like-minded individuals on their habit-building journey. Share experiences, get motivation, and celebrate achievements together in our supportive community platform.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    'ai-coach': {
      title: 'AI Habit Coach',
      description: 'Get personalized advice and real-time adjustments from our intelligent AI assistant. Receive custom recommendations based on your progress patterns and behavioral insights.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    health: {
      title: 'Health Integration',
      description: 'Seamlessly sync with your favorite health apps and wearable devices. Track wellness habits with medical professional insights and comprehensive health monitoring.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    challenges: {
      title: 'Habit Challenges',
      description: 'Join exciting community challenges and compete with friends. Stay motivated through gamification, leaderboards, and achievement systems designed to keep you engaged.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  }

  const faqs = [
    {
      question: 'What is this program about?',
      answer: 'This program is designed to help you build sustainable habits that lead to long-term transformation in areas like health, productivity, mindset, and personal growth. It focuses on small, consistent actions that create lasting change.'
    },
    {
      question: 'Who is this program for?',
      answer: 'This program is for anyone who wants to break bad habits, develop positive routines, and create a system for success—whether you\'re working on fitness, focus, organization, or self-improvement.'
    },
    {
      question: 'What if I miss a day?',
      answer: 'Missing a day doesn\'t mean failure! What matters most is consistency over time. The key is to never miss twice—get back on track the next day.'
    },
    {
      question: 'How does this program keep me accountable?',
      answer: 'We use habit trackers, progress check-ins, and community support to help you stay committed. You\'ll also receive guidance on how to build accountability systems that work for you.'
    },
    {
      question: 'Can I work on multiple habits at once?',
      answer: 'It\'s best to start small. Focus on one or two key habits at a time before adding more. This prevents overwhelm and increases the chances of success.'
    },
    {
      question: 'How do I track my progress?',
      answer: 'We provide habit trackers, reflection prompts, and periodic progress check-ins to help you measure improvement and celebrate small wins along the way.'
    },
    {
      question: 'Is there a support community?',
      answer: 'Yes! You\'ll have access to a community of like-minded individuals who are also working on habit-building, so you can share experiences, get support, and stay inspired.'
    },
    {
      question: 'What makes this program different?',
      answer: 'Unlike traditional goal-setting programs, this one focuses on identity-based habit change—meaning you won\'t just chase goals, you\'ll transform into the person who naturally embodies them.'
    }
  ]

  const teamMembers = [
    {
      name: 'Dr. Sashi Bhusan Nayak',
      role: 'Mentor & Guide',
      subtitle: 'Asst. Professor (Ravenshaw University)',
      image: 'SashiSirTeam.png'
    },
    {
      name: 'Basudev Naik',
      role: 'Backend Developer',
      subtitle: 'Wisen Technology',
      image: 'BasudevProfile.jpeg'
    },
    {
      name: 'Swastik Behera',
      role: 'FullStack Developer',
      subtitle: 'Deloitte USI',
      image: 'SwastikTeam.jpg'
    },
    {
      name: 'Sidharth Pradhan',
      role: 'Frontend Developer',
      subtitle: 'Infosys Limited',
      image: 'SidharthProfile.jpeg'
    }
  ]

  const testimonials = [
    {
      content: "HabitUP completely transformed my morning routine. In just 30 days, I went from hitting snooze 5 times to waking up energized and productive.",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      content: "The habit tracking and analytics helped me identify patterns I never noticed. I've read more books in the last 2 months than the previous 2 years!",
      author: "Michael Chen",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      content: "As a doctor, I recommend HabitUP to my patients for lifestyle changes. The medical integration features coming soon will make it even more valuable.",
      author: "Dr. Emily Rodriguez",
      role: "Family Physician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ]

  const pricingPlans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      features: [
        'Basic habit tracking',
        'Community access',
        'Daily motivation',
        'Progress reports'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '₹59',
      period: '/month',
      features: [
        'All free features',
        'Advanced analytics',
        'Personal coaching',
        'Priority support',
        'Exclusive content'
      ],
      popular: true
    }
  ]

  return (
    <div className="pt-16 sm:pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-500 to-blue-700 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-raleway">
                Habit Build Transformation Program
              </h1>
              <p className="text-accent-400 text-sm font-medium mb-3">
                ( A unit of Sadhana Mandira Charitable Trust )
              </p>
              <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
                Daily simple habits, create a life with more time and peace
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://www.youtube.com/embed/U_nzqnXWvSo"
                  className="bg-accent-400 text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started <i className="fas fa-play ml-2"></i>
                </motion.a>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/img/BudhhaBlack.png"
                  alt="Hero Image"
                  className="w-full max-w-md mx-auto"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-accent-400 text-primary-500 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  NEW
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section with Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-500">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real transformations from people who changed their lives with HabitUP
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              speed={600}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
              }}
              className="testimonials-swiper pb-12"
            >
              {testimonialImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={`/img/${image}`}
                      alt={`Success Story ${index + 1}`}
                      className="w-full h-auto max-h-80 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-500">
              Why Choose HabitUP
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Current Features */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-300">
                <i className="bi bi-graph-up text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-500">Advanced Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your habits with detailed analytics and visual progress reports to stay motivated and on track.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-300">
                <i className="bi bi-person-check text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-500">Personalized Plans</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom habit plans tailored to your goals, lifestyle, and preferences for maximum effectiveness.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-300">
                <i className="bi bi-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-500">Reward System</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn points and unlock achievements as you progress, reinforcing positive behavior change.
              </p>
            </motion.div>

            {/* Coming Soon Features */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide animate-pulse">
                Coming Soon
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-300">
                <i className="bi bi-people text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-500">Community Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with others on similar journeys for motivation, accountability, and shared experiences.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide animate-pulse">
                Coming Soon
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-300">
                <i className="bi bi-robot text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-500">AI Habit Coach</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized advice and adjustments from our intelligent chatbot assistant.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide animate-pulse">
                Coming Soon
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-300">
                <i className="bi bi-heart-pulse text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-500">Health Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Sync with health apps and devices to track wellness habits with medical professional insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">5</div>
              <div className="text-lg text-white/90">Active Users</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">92%</div>
              <div className="text-lg text-white/90">Success Rate</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg text-white/90">Habits Tracked</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg text-white/90">Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-500">
              How HabitUP Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-secondary-500">Set Your Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from our library of habits or create your own. Define your targets and preferred tracking method.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-secondary-500">Track Daily</h3>
                <p className="text-gray-600 leading-relaxed">
                  Log your progress each day with our simple interface. Receive reminders to stay consistent.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-secondary-500">Review & Improve</h3>
                <p className="text-gray-600 leading-relaxed">
                  Analyze your patterns with insightful reports. Adjust your approach based on data-driven insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-500">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group border-l-4 border-transparent hover:border-orange-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-6 left-6 text-6xl text-gray-200 font-serif leading-none">"</div>
                <div className="relative z-10 pt-8">
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Future Features
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore what's coming next to make your habit-building journey even more powerful
            </p>
          </motion.div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(features).map((key) => (
              <button
                key={key}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {features[key].title}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <motion.div
            key={activeTab}
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {features[activeTab].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {features[activeTab].description}
                </p>
              </div>
              <div>
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-500">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your Questions, Answered – Build Better Habits, Transform Your Life!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <i className={`bi bi-chevron-${openFaq === index ? 'up' : 'down'} text-primary-500 transition-transform duration-300`}></i>
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    className="px-6 pb-6 pt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-500">
              Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experts is committed to exceeding your expectations and ensuring your success!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <img
                    src={`/img/${member.image}`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary-500 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-500">
              Simple Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your habit transformation journey today with our affordable plans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Plan</h3>
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  ₹0
                  <span className="text-base font-normal text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500">Perfect to get started</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-green-500 mr-3"></i>
                  <span>Basic habit tracking</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-green-500 mr-3"></i>
                  <span>Community access</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-green-500 mr-3"></i>
                  <span>Daily motivation</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-green-500 mr-3"></i>
                  <span>Progress tracking</span>
                </li>
              </ul>

              <button className="w-full py-2 px-4 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors duration-300">
                Get Started Free
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              className="bg-primary-500 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-400 text-primary-500 px-4 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
                <div className="text-3xl font-bold mb-2">
                  ₹59
                  <span className="text-base font-normal opacity-80">/month</span>
                </div>
                <p className="text-sm opacity-80">Everything you need to succeed</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-accent-400 mr-3"></i>
                  <span>All free features</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-accent-400 mr-3"></i>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-accent-400 mr-3"></i>
                  <span>Personal coaching</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-accent-400 mr-3"></i>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="bi bi-check-circle text-accent-400 mr-3"></i>
                  <span>Exclusive content</span>
                </li>
              </ul>

              <button className="w-full py-2 px-4 bg-white text-primary-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Premium
              </button>
            </motion.div>
          </div>

          {/* Simple CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-4">
              Not sure which plan is right for you?
            </p>
            <button className="bg-secondary-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-500">
              Contact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact us via the details below for any queries or communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <i className="bi bi-geo-alt text-3xl text-primary-500 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <a
                href="https://www.google.com/maps/place/Ravenshaw+University,+Cuttack/@20.4627393,85.8948111,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                Ravenshaw University, Cuttack
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <i className="bi bi-whatsapp text-3xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919437135590"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                +91 94371 35590
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <i className="bi bi-envelope text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:habitupapplication@gmail.com"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                habitupapplication@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Upcoming