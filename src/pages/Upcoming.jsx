import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Upcoming = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const upcomingFeatures = [
    {
      title: 'AI-Powered Habit Recommendations',
      description: 'Get personalized habit suggestions based on your lifestyle, goals, and progress patterns.',
      icon: 'fas fa-robot',
      status: 'In Development',
      eta: 'Q2 2024',
      color: 'blue'
    },
    {
      title: 'Social Habit Challenges',
      description: 'Join community challenges, compete with friends, and stay motivated together.',
      icon: 'fas fa-users',
      status: 'Coming Soon',
      eta: 'Q3 2024',
      color: 'green'
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Deep insights into your habit patterns with predictive analytics and trend analysis.',
      icon: 'fas fa-chart-line',
      status: 'Planning',
      eta: 'Q4 2024',
      color: 'purple'
    },
    {
      title: 'Habit Streaks & Rewards',
      description: 'Earn points, unlock achievements, and redeem rewards for maintaining habit streaks.',
      icon: 'fas fa-trophy',
      status: 'In Development',
      eta: 'Q2 2024',
      color: 'yellow'
    },
    {
      title: 'Voice-Activated Habit Logging',
      description: 'Log your habits using voice commands for a seamless, hands-free experience.',
      icon: 'fas fa-microphone',
      status: 'Research',
      eta: 'Q1 2025',
      color: 'red'
    },
    {
      title: 'Habit Coaching Marketplace',
      description: 'Connect with certified habit coaches for personalized guidance and support.',
      icon: 'fas fa-chalkboard-teacher',
      status: 'Coming Soon',
      eta: 'Q3 2024',
      color: 'indigo'
    }
  ]

  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      title: 'Foundation & Core Features',
      items: [
        'Enhanced habit tracking interface',
        'Improved mobile app performance',
        'Basic analytics dashboard',
        'User profile customization'
      ],
      status: 'completed'
    },
    {
      quarter: 'Q2 2024',
      title: 'Intelligence & Automation',
      items: [
        'AI-powered habit recommendations',
        'Smart notification system',
        'Habit streaks & rewards',
        'Progress prediction algorithms'
      ],
      status: 'current'
    },
    {
      quarter: 'Q3 2024',
      title: 'Social & Community',
      items: [
        'Social habit challenges',
        'Community forums',
        'Habit coaching marketplace',
        'Team collaboration features'
      ],
      status: 'upcoming'
    },
    {
      quarter: 'Q4 2024',
      title: 'Advanced Analytics',
      items: [
        'Advanced analytics dashboard',
        'Custom reporting tools',
        'Data export capabilities',
        'Integration with health apps'
      ],
      status: 'planned'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development':
        return 'bg-blue-100 text-blue-800'
      case 'Coming Soon':
        return 'bg-green-100 text-green-800'
      case 'Planning':
        return 'bg-purple-100 text-purple-800'
      case 'Research':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoadmapStatus = (status) => {
    switch (status) {
      case 'completed':
        return { color: 'bg-green-500', icon: 'fas fa-check' }
      case 'current':
        return { color: 'bg-blue-500', icon: 'fas fa-play' }
      case 'upcoming':
        return { color: 'bg-yellow-500', icon: 'fas fa-clock' }
      case 'planned':
        return { color: 'bg-gray-400', icon: 'fas fa-calendar' }
      default:
        return { color: 'bg-gray-400', icon: 'fas fa-circle' }
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Upcoming Features
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Discover what's coming next to HabitUP. We're constantly innovating to help you build better habits and transform your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Feature
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Join Beta Program
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What's Coming Next
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These exciting features are currently in development and will be rolling out over the coming months.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${feature.color}-100 text-${feature.color}-600 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <i className={`${feature.icon} text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(feature.status)}`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Expected: {feature.eta}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Development Roadmap
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our planned development timeline showing what we're working on and what's coming next.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {roadmapItems.map((item, index) => {
                const statusInfo = getRoadmapStatus(item.status)
                return (
                  <div
                    key={index}
                    className="relative flex items-start space-x-8 pb-12"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline Dot */}
                    <div className={`w-16 h-16 ${statusInfo.color} rounded-full flex items-center justify-center text-white z-10`}>
                      <i className={`${statusInfo.icon} text-xl`}></i>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.quarter}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex} className="flex items-center space-x-3">
                            <i className="fas fa-check-circle text-green-500 text-sm"></i>
                            <span className="text-gray-700">{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Beta Program CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">
              Want Early Access?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join our beta program to get early access to new features and help shape the future of HabitUP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Beta Program
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Request Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Have a Feature Idea?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We love hearing from our users! Share your ideas and help us build the features you want to see.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Feature Title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Describe your feature idea..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Feature Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Upcoming