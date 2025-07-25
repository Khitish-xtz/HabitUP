import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-raleway" data-aos="fade-up">
            About HabitUP
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Transforming lives through the power of consistent habits and ancient wisdom
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-primary-500 font-raleway">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The heart of our mission is the belief that the mind holds extraordinary power to transform
                lives. We tap into the immense potential of hypnosis and affirmations to help individuals build
                meaningful habits, overcome inner blocks, and unlock lasting change.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By gently reprogramming the subconscious, we make personal growth not only possible but practical.
                Our approach combines modern psychology with ancient wisdom to create a holistic transformation experience.
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src="/img/AboutUs.jpg"
                alt="Our Mission"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide our mission and approach</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className="bi bi-heart"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                We approach every individual with understanding and empathy, recognizing that transformation is a personal journey.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">Wisdom</h3>
              <p className="text-gray-600 leading-relaxed">
                We blend ancient wisdom with modern science to provide holistic solutions for personal growth and transformation.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of community support and create spaces where individuals can grow together.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className="bi bi-graph-up"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to continuous improvement and helping our community members achieve their highest potential.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
              <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of honesty and transparency in all our interactions and programs.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <div className="w-16 h-16 bg-accent-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className="bi bi-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in everything we do, from our programs to our support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary-500 font-raleway" data-aos="fade-up">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              <p>
                HabitUP was born from a simple yet profound realization: that small, consistent actions have the power 
                to create extraordinary transformations. Our founders, deeply rooted in both modern psychology and ancient 
                spiritual practices, recognized the gap between knowing what to do and actually doing it.
              </p>
              <p>
                As a unit of Sadhana Mandira Charitable Trust, we are committed to reviving ancient healing practices 
                rooted in Vedic wisdom and the teachings of the Bhagavad Gita. Our approach guides humanity toward 
                the universal science of meditation and nurtures noble qualities for a more harmonious world.
              </p>
              <p>
                Today, HabitUP serves thousands of individuals worldwide, helping them build sustainable habits that 
                lead to lasting transformation. We continue to evolve our methods, always staying true to our core 
                mission of empowering individuals to unlock their highest potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 font-raleway">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Dedicated professionals committed to your transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="100">
              <div className="relative overflow-hidden">
                <img
                  src="/img/SashiSirTeam.png"
                  alt="Team Member"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-primary-500">Sashi Sir</h4>
                <span className="text-sm text-gray-500 block mb-3">Founder & Lead Coach</span>
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  "Transformation begins with a single step, taken with intention and sustained with love."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
              <div className="relative overflow-hidden">
                <img
                  src="/img/BasudevProfile.jpeg"
                  alt="Team Member"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-primary-500">Basudev</h4>
                <span className="text-sm text-gray-500 block mb-3">Senior Meditation Guide</span>
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  "In stillness, we find the strength to transform our lives and touch the lives of others."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="300">
              <div className="relative overflow-hidden">
                <img
                  src="/img/SidharthProfile.jpeg"
                  alt="Team Member"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-primary-500">Sidharth</h4>
                <span className="text-sm text-gray-500 block mb-3">Habit Formation Specialist</span>
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  "Every habit is a vote for the type of person you wish to become."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-raleway" data-aos="fade-up">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join thousands of individuals who have already started their transformation journey with HabitUP
          </p>
          <button 
            className="bg-accent-400 text-primary-500 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-accent-500 hover:shadow-lg hover:scale-105"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default About