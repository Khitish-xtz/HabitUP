import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import UserHome from './pages/UserHome'
import About from './pages/About'
import Services from './pages/Services'
import Teams from './pages/Teams'
import Contact from './pages/Contact'
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
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Protected routes - require authentication */}
            <Route path="/home" element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            } />
            <Route path="/user-home" element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            } />
            <Route path="/services" element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/admin-dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/doctor" element={
              <ProtectedRoute>
                <Doctor />
              </ProtectedRoute>
            } />
            <Route path="/sashi" element={
              <ProtectedRoute>
                <Sashi />
              </ProtectedRoute>
            } />
            <Route path="/subscription" element={
              <ProtectedRoute>
                <Subscription />
              </ProtectedRoute>
            } />
            <Route path="/upcoming" element={
              <ProtectedRoute>
                <Upcoming />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App