import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const services = [
    {
      icon: 'fa-solid fa-brain',
      title: 'Hypnosis & Affirmations',
      description: 'Reprogram your subconscious mind with powerful hypnosis sessions and positive affirmations designed to break limiting beliefs.',
      features: ['Guided hypnosis sessions', 'Personalized affirmations', 'Subconscious reprogramming', 'Stress reduction techniques'],
      price: '₹2,999',
      duration: 'per month'
    },
    {
      icon: 'fa-solid fa-om',
      title: 'Kriya Yoga Sessions',
      description: 'Live, unrecorded virtual sessions to build the habit of regular meditation within a devoted community of practitioners.',
      features: ['Live virtual sessions', 'Community support', 'Ancient Kriya techniques', 'Personalized guidance'],
      price: '₹1,999',
      duration: 'per month',
      popular: true
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Habit Tracking System',
      description: 'Advanced habit tracking with analytics, progress reports, and personalized recommendations for sustainable change.',
      features: ['Progress analytics', 'Streak tracking', 'Custom reminders', 'Performance insights'],
      price: '₹999',
      duration: 'per month'
    },
    {
      icon: 'fa-solid fa-users',
      title: '21-Day Challenges',
      description: 'Structured challenges designed to help you build specific habits with community support and expert guidance.',
      features: ['Guided challenges', 'Daily check-ins', 'Community interaction', 'Expert support'],
      price: '₹1,499',
      duration: 'per challenge'
    },
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Personal Coaching',
      description: 'One-on-one coaching sessions with experienced habit formation specialists for personalized transformation.',
      features: ['Individual sessions', 'Customized plans', 'Weekly check-ins', 'Progress monitoring'],
      price: '₹4,999',
      duration: 'per month'
    },
    {
      icon: 'fa-solid fa-book-open',
      title: 'Resource Library',
      description: 'Access to exclusive content including guided meditations, worksheets, and expert interviews.',
      features: ['Meditation library', 'Habit worksheets', 'Expert interviews', 'Science-backed content'],
      price: '₹499',
      duration: 'per month'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: '/img/ChildBoyReview.jpg',
      quote: 'HabitUP transformed my daily routine. The meditation sessions helped me find inner peace and build lasting habits.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: '/img/ElderBoyReview.jpg',
      quote: 'The 21-day challenges were exactly what I needed. The community support made all the difference in my journey.',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'Teacher',
      image: '/img/ElderGirlReview.jpg',
      quote: 'The hypnosis sessions helped me overcome years of limiting beliefs. I feel more confident and focused than ever.',
      rating: 5
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-raleway" data-aos="fade-up">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Comprehensive programs designed to help you build lasting habits and transform your life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  service.popular ? 'border-4 border-accent-400' : 'border border-gray-200'
                }`}
                data-aos="fade-up" 
                data-aos-delay={100 + index * 100}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-400 text-primary-500 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <i className="bi bi-check-circle text-accent-400"></i>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center border-t pt-6">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-500">{service.price}</span>
                    <span className="text-gray-500 text-sm">/{service.duration}</span>
                  </div>
                  <button className="w-full bg-accent-400 text-primary-500 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-accent-500 hover:shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">How It Works</h2>
            <p className="text-gray-600 text-lg">Simple steps to start your transformation journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 relative">
                <i className="bi bi-person-plus"></i>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">Sign Up</h3>
              <p className="text-gray-600 text-sm">Create your account and complete the initial assessment to understand your goals.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 relative">
                <i className="bi bi-gear"></i>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">Choose Plan</h3>
              <p className="text-gray-600 text-sm">Select the service that best fits your needs and transformation goals.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 relative">
                <i className="bi bi-play-circle"></i>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">Start Journey</h3>
              <p className="text-gray-600 text-sm">Begin your personalized program with guided sessions and expert support.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-20 h-20 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 relative">
                <i className="bi bi-trophy"></i>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">Transform</h3>
              <p className="text-gray-600 text-sm">Experience lasting change as you build sustainable habits and achieve your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Real stories from people who transformed their lives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                data-aos="fade-up" 
                data-aos-delay={100 + index * 100}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-accent-400"></i>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <h4 className="font-bold text-primary-500">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Get answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-bold mb-3 text-primary-500">How long does it take to see results?</h4>
              <p className="text-gray-600 leading-relaxed">
                Most clients start noticing positive changes within the first 21 days. Significant transformation 
                typically occurs within 90 days of consistent practice and engagement with our programs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-bold mb-3 text-primary-500">Can I switch between different services?</h4>
              <p className="text-gray-600 leading-relaxed">
                Yes, you can upgrade or change your service plan at any time. Our team will help you transition 
                smoothly and ensure you get the most value from your chosen program.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-lg font-bold mb-3 text-primary-500">Are the sessions recorded?</h4>
              <p className="text-gray-600 leading-relaxed">
                Our Kriya Yoga sessions are live and unrecorded to maintain the sacred nature of the practice. 
                However, some educational content and guided meditations are available in our resource library.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-lg font-bold mb-3 text-primary-500">What if I'm not satisfied with the service?</h4>
              <p className="text-gray-600 leading-relaxed">
                We offer a 30-day money-back guarantee for all our services. If you're not completely satisfied, 
                we'll refund your payment, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-raleway" data-aos="fade-up">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Choose the service that resonates with you and begin your journey to lasting change today
          </p>
          <button 
            className="bg-accent-400 text-primary-500 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-accent-500 hover:shadow-lg hover:scale-105"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Services