import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Habit Formation",
      excerpt: "Discover how your brain creates habits and how you can leverage this knowledge to build better routines.",
      image: "habit2.webp",
      date: "2024-01-15",
      author: "Dr. Sashi Bhusan Nayak",
      category: "Science",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "21 Days to Transform Your Life",
      excerpt: "Learn why 21 days is the magic number for habit formation and how to make the most of this period.",
      image: "habit3.jpg",
      date: "2024-01-10",
      author: "HabitUP Team",
      category: "Transformation",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Morning Routines of Successful People",
      excerpt: "Explore the morning habits that set successful individuals apart and how you can implement them.",
      image: "habit4.jpg",
      date: "2024-01-05",
      author: "Dr. Sashi Bhusan Nayak",
      category: "Productivity",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Overcoming Habit Setbacks",
      excerpt: "What to do when you break your streak and how to get back on track without losing motivation.",
      image: "habit5.jpg",
      date: "2024-01-01",
      author: "HabitUP Team",
      category: "Motivation",
      readTime: "4 min read"
    }
  ]

  const categories = ["All", "Science", "Transformation", "Productivity", "Motivation"]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            HabitUP Blog
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Discover insights, tips, and strategies to build better habits and transform your life
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative">
                  <img
                    src={`/img/${post.image}`}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-600 transition-colors">
                    <a href={`#blog-${post.id}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href={`#blog-${post.id}`}
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    Read More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-gray-600 mb-8">
              Get weekly insights and tips delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog