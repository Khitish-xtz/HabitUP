import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Doctor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    experience: '',
    qualification: '',
    bio: '',
    availability: '',
    consultationFee: ''
  })

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const benefits = [
    {
      icon: 'fas fa-users',
      title: 'Reach More Clients',
      description: 'Connect with individuals seeking habit transformation guidance worldwide'
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Schedule',
      description: 'Set your own availability and work on your terms'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Competitive Earnings',
      description: 'Earn competitive rates for your expertise and consultation services'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Professional Growth',
      description: 'Enhance your skills through our continuous learning programs'
    }
  ]

  const requirements = [
    'Valid medical degree or relevant certification',
    'Minimum 2 years of experience in behavioral psychology or related field',
    'Strong communication and interpersonal skills',
    'Commitment to helping clients achieve their habit goals',
    'Availability for online consultations'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Become a HabitUP Instructor
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join our team of expert instructors and help people transform their lives through better habits
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#application"
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
                >
                  Apply Now
                </a>
                <a
                  href="#benefits"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <img
                src="/img/ApplyDoctor.png"
                alt="Become an Instructor"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Join HabitUP as an Instructor?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Make a meaningful impact while building your career in the growing field of habit transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Requirements & Qualifications
              </h2>
              <p className="text-gray-600 text-lg">
                We're looking for qualified professionals who are passionate about helping others
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 text-xl mt-0.5"></i>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Apply to Become an Instructor
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 48 hours
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Specialization *
                    </label>
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Specialization</option>
                      <option value="behavioral-psychology">Behavioral Psychology</option>
                      <option value="life-coaching">Life Coaching</option>
                      <option value="wellness-coaching">Wellness Coaching</option>
                      <option value="addiction-counseling">Addiction Counseling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Experience</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Consultation Fee (per hour)
                    </label>
                    <input
                      type="number"
                      name="consultationFee"
                      value={formData.consultationFee}
                      onChange={handleInputChange}
                      placeholder="USD"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Qualifications *
                  </label>
                  <textarea
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="List your relevant qualifications, certifications, and degrees"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Professional Bio *
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your background, approach, and why you want to join HabitUP"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Availability
                  </label>
                  <textarea
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Describe your preferred schedule and time zones"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help you through the application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@habitup.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctor