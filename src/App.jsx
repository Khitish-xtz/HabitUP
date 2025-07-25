import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Blog from './pages/Blog'
import AdminDashboard from './pages/AdminDashboard'
import Doctor from './pages/Doctor'
import Sashi from './pages/Sashi'
import Subscription from './pages/Subscription'
import Terms from './pages/Terms'
import Upcoming from './pages/Upcoming'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/sashi" element={<Sashi />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App