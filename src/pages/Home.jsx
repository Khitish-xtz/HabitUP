import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import AOS from 'aos'
import 'swiper/css'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
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

  const services = [
    {
      image: 'science backed.jpg',
      icon: 'fa-solid fa-atom',
      title: 'Science-Backed Strategies',
      description: 'Our program uses proven psychological techniques to help you build sustainable habits.'
    },
    {
      image: 'PersonalizedHabit.jpg',
      icon: 'fa-solid fa-chart-gantt',
      title: 'Personalized Habit Tracking',
      description: 'Track your progress with customized habit-tracking tools tailored to your goals.'
    },
    {
      image: 'customer.jpg',
      icon: 'fa-solid fa-comments',
      title: 'Community Support',
      description: 'Join a supportive community of like-minded individuals on the same journey.'
    },
    {
      image: 'expert coaching.jpg',
      icon: 'fa-solid fa-chalkboard',
      title: 'Expert Coaching',
      description: 'Get guidance from experienced coaches to stay on track and overcome challenges.'
    },
    {
      image: 'comprehensive guide.jpg',
      icon: 'fa-solid fa-users-line',
      title: 'Comprehensive Guide',
      description: 'Access a step-by-step guide to help you build and maintain new habits.'
    },
    {
      image: 'guided challenges.jpg',
      icon: 'fa-solid fa-stairs',
      title: 'Guided Challenges',
      description: '21-days challenges to build habits, to adopt yourself in the process of transformation.'
    }
  ]

  const features = [
    {
      image: 'daily motivation.jpg',
      title: 'DAILY MOTIVATION',
      description: 'Stay inspired with daily motivational quotes and progress reminders tailored to your habit journey.',
      points: [
        'Personalized motivational content based on your habits',
        'Celebration of milestones and streaks to keep you engaged',
        'Encouraging notifications when you need them most'
      ]
    },
    {
      image: 'exclusive resources.jpg',
      title: 'EXCLUSIVE RESOURCES',
      description: 'Access premium content designed to help you build and maintain successful habits.',
      content: 'Our library includes guided meditations, habit-building worksheets, expert interviews, and science-backed strategies to make habit formation easier. You\'ll get step-by-step guides for common habit challenges and templates to track your progress effectively.'
    },
    {
      image: 'progress report.jpg',
      title: 'PROGRESS REPORTS',
      description: 'Visualize your habit journey with detailed analytics and progress tracking that shows your consistency and growth.',
      points: [
        'Weekly and monthly habit performance reports',
        'Streak counters to maintain motivation',
        'Customizable charts showing your habit evolution'
      ]
    },
    {
      image: 'adaptive learning.jpg',
      title: 'FLEXIBLE & ADAPTIVE LEARNING',
      description: 'Our system adapts to your progress and adjusts recommendations accordingly.',
      content: 'Whether you\'re a morning person or night owl, our platform adjusts to your schedule. The difficulty of challenges scales with your progress, and you can pause or modify habits as needed. We understand that life happens, and our system is designed to help you get back on track after setbacks.'
    }
  ]

  const faqs = [
    {
      question: 'What is this program about?',
      answer: 'This program is designed to help you build sustainable habits that lead to long-term transformation and personal growth.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most users start seeing positive changes within 21 days, with significant transformation occurring within 90 days of consistent practice.'
    },
    {
      question: 'Is this suitable for beginners?',
      answer: 'Absolutely! Our program is designed for people at all levels, from complete beginners to those looking to optimize their existing habits.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 community support, expert coaching sessions, and personalized guidance throughout your journey.'
    }
  ]

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-primary-500 text-white flex items-center py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-raleway leading-tight">
                Habit Build Transformation Program
              </h1>
              <p className="text-accent-400 text-sm font-medium mb-3 font-raleway">
                ( A unit of Sadhana Mandira Charitable Trust )
              </p>
              <p className="text-xl mb-8 text-white/90">
                Daily simple habits, create a life with more time and peace
              </p>
              <div className="flex">
                <a
                  href="https://www.youtube.com/embed/U_nzqnXWvSo"
                  className="inline-flex items-center bg-accent-400 text-primary-500 font-raleway font-medium text-base px-7 py-3 rounded-full transition-all duration-500 shadow-lg hover:shadow-xl hover:bg-accent-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started <i className="fa-solid fa-circle-play fa-beat ml-2"></i>
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2" data-aos="zoom-out" data-aos-delay="100">
              <img
                src="/img/BudhhaBlack.png"
                alt="Hero Image"
                className="w-full max-w-md mx-auto animate-up-down"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 1, spaceBetween: 30 },
              992: { slidesPerView: 2, spaceBetween: 40 }
            }}
            className="testimonials-swiper"
          >
            {testimonialImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/img/${image}`}
                  alt={`Testimonial ${index + 1}`}
                  className="quote-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2" data-aos="fade-up" data-aos-delay="200">
              <img
                src="/img/MentorMouth.jpg"
                alt="About us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-3xl font-bold mb-6 text-primary-500 font-raleway">About Us</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The heart of our mission is the belief that the mind holds extraordinary power to transform
                lives. We tap into the immense potential of hypnosis and affirmations to help individuals build
                meaningful habits, overcome inner blocks, and unlock lasting change. By gently reprogramming the
                subconscious, we make personal growth not only possible but practical.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <i className="bi bi-reception-4 text-accent-400 text-2xl mt-1"></i>
                  <div>
                    <h5 className="text-lg font-semibold mb-2 text-primary-500">Science and Wisdom in Harmony</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Rooted in both science and ancient wisdom, hypnosis allows us to access deeper layers
                      of the mind where true transformation begins. Whether it's for healing, focus, or
                      self-discovery, our approach empowers individuals to live more intentional,
                      balanced, and fulfilling lives—creating a ripple effect that uplifts both
                      individuals and the world around them.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="bi bi-person-heart text-accent-400 text-2xl mt-1"></i>
                  <div>
                    <h5 className="text-lg font-semibold mb-2 text-primary-500">Reviving Ancient Healing</h5>
                    <p className="text-gray-600 leading-relaxed">
                      It is also an initiative to revive ancient healing practices rooted in Vedic wisdom
                      and the teachings of the Bhagavad Gita — guiding humanity toward the universal
                      science of meditation and nurturing noble qualities for a more harmonious world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guru Blessings Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary-500 font-raleway">With the Blessings of Our Guru</h2>
          <p className="text-lg italic mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With the blessings and guidance of our Gurus, we support Kriyavans—those initiated into Kriya Yoga—who struggle with daily practice,
            by offering live, unrecorded virtual sessions to gently build the habit of regular meditation within a devoted community.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <img
                src="/img/path-to-image-1.png"
                className="w-full rounded-lg shadow-lg"
                alt="Prajñānānanda Paramahaṃsa Guru 1"
              />
            </div>
            <div>
              <img
                src="/img/path-to-image-2.png"
                className="w-full rounded-lg shadow-lg"
                alt="Prajñānānanda Paramahaṃsa Guru 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Featured Services</h2>
            <p className="text-gray-600 text-lg">Track progress, set goals, and stay consistent with powerful habit-building tools</p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group" data-aos="zoom-in" data-aos-delay={200 + index * 100}>
                <div className="service-item relative">
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/img/${service.image}`}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-600 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-white p-8 -mt-16 mx-6 relative z-10 rounded-lg shadow-lg text-center transition-all duration-300 group-hover:shadow-xl">
                    <div className="w-18 h-18 bg-accent-400 text-white border-6 border-white rounded-full flex items-center justify-center text-2xl absolute -top-9 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:bg-white group-hover:border-accent-400">
                      <i className={`${service.icon} ${service.icon.includes('group-hover') ? '' : 'group-hover:text-accent-400'}`}></i>
                    </div>
                    <h3 className="text-xl font-bold mt-4 mb-4 text-primary-500 transition-colors duration-300 group-hover:text-accent-400">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Features</h2>
            <p className="text-gray-600 text-lg">Smart Systems, Lasting Change - Features Designed for Your Success!</p>
          </div>
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`} data-aos="zoom-out" data-aos-delay="100">
                  <img
                    src={`/img/${feature.image}`}
                    alt={feature.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`} data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-2xl font-bold mb-4 text-primary-500 font-raleway">{feature.title}</h3>
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.points && (
                    <ul className="space-y-2">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <i className="bi bi-check text-accent-400 text-lg mt-0.5"></i>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.content && (
                    <p className="text-gray-600 leading-relaxed">
                      {feature.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Your Questions, Answered – Build Better Habits, Transform Your Life!</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6" data-aos="fade-up" data-aos-delay={100 + index * 100}>
                <div className="flex items-start space-x-4">
                  <i className="bi bi-question-circle text-accent-400 text-xl mt-1"></i>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-primary-500">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Get In Touch</h2>
            <p className="text-gray-600 text-lg">Ready to start your transformation journey? Contact us today!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-accent-400 text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4 border-2 border-accent-400/20">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-500">Address</h3>
              <p className="text-gray-600 text-sm">Bhubaneswar, Odisha, India</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-accent-400 text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4 border-2 border-accent-400/20">
                <i className="bi bi-phone"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-500">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 XXX XXX XXXX</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-accent-400 text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4 border-2 border-accent-400/20">
                <i className="bi bi-envelope"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-500">Email Us</h3>
              <p className="text-gray-600 text-sm">info@habitup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home