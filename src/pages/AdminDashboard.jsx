import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminTopNav from '../components/admin/AdminTopNav'
import AdminDashboardOverview from '../components/admin/AdminDashboardOverview'
import AdminUserManagement from '../components/admin/AdminUserManagement'
import AdminSystemLogs from '../components/admin/AdminSystemLogs'
import AdminSubscriptions from '../components/admin/AdminSubscriptions'
import AdminHabitTracking from '../components/admin/AdminHabitTracking'
import AdminErrorLogs from '../components/admin/AdminErrorLogs'
import AdminSystemSettings from '../components/admin/AdminSystemSettings'
import AdminHealthCheck from '../components/admin/AdminHealthCheck'
import AdminAnalytics from '../components/admin/AdminAnalytics'
import AdminReports from '../components/admin/AdminReports'
import AdminBreadcrumb from '../components/admin/AdminBreadcrumb'

const AdminDashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [adminData, setAdminData] = useState(null)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Map URL paths to sections
  const pathToSection = {
    '/admin-dashboard': 'dashboard',
    '/admin/dashboard': 'dashboard',
    '/admin/users': 'users',
    '/admin/subscriptions': 'subscriptions',
    '/admin/habits': 'habits',
    '/admin/logs': 'logs',
    '/admin/error-logs': 'error-logs',
    '/admin/settings': 'settings',
    '/admin/health': 'health',
    '/admin/analytics': 'analytics',
    '/admin/reports': 'reports'
  }

  useEffect(() => {
    // Set active section based on URL
    const section = pathToSection[location.pathname] || 'dashboard'
    setActiveSection(section)
  }, [location.pathname])

  useEffect(() => {
    // Check if user is logged in as admin
    const adminToken = localStorage.getItem('adminToken')
    const adminName = localStorage.getItem('adminName')
    const adminEmail = localStorage.getItem('adminEmail')
    const isDemoAdmin = localStorage.getItem('isDemoAdmin') === 'true'

    if (!adminToken) {
      // Redirect to home if not logged in
      navigate('/')
      return
    }

    setAdminData({
      name: adminName || 'Admin',
      email: adminEmail || 'admin@habitup.com',
      token: adminToken
    })
    setIsDemoMode(isDemoAdmin)
    setIsLoading(false)
  }, [navigate])

  // Handle URL-based routing
  useEffect(() => {
    const path = location.pathname
    if (path.includes('/admin/users')) {
      setActiveSection('users')
    } else if (path.includes('/admin/subscriptions')) {
      setActiveSection('subscriptions')
    } else if (path.includes('/admin/habits')) {
      setActiveSection('habits')
    } else if (path.includes('/admin/error-logs')) {
      setActiveSection('error-logs')
    } else if (path.includes('/admin/logs')) {
      setActiveSection('logs')
    } else if (path.includes('/admin/settings')) {
      setActiveSection('settings')
    } else if (path.includes('/admin/health')) {
      setActiveSection('health')
    } else if (path.includes('/admin/analytics')) {
      setActiveSection('analytics')
    } else if (path.includes('/admin/reports')) {
      setActiveSection('reports')
    } else {
      setActiveSection('dashboard')
    }
  }, [location.pathname])

  // Handle section changes with URL updates
  const handleSectionChange = (section) => {
    setActiveSection(section)
    const routeMap = {
      'dashboard': '/admin/dashboard',
      'users': '/admin/users',
      'subscriptions': '/admin/subscriptions',
      'habits': '/admin/habits',
      'logs': '/admin/logs',
      'error-logs': '/admin/error-logs',
      'settings': '/admin/settings',
      'health': '/admin/health',
      'analytics': '/admin/analytics',
      'reports': '/admin/reports'
    }
    navigate(routeMap[section] || '/admin/dashboard')
  }

  const handleLogout = () => {
    // Clear admin data
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminName')
    localStorage.removeItem('adminEmail')
    localStorage.removeItem('adminRole')
    localStorage.removeItem('isDemoAdmin')
    
    // Redirect to home
    navigate('/')
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminDashboardOverview isDemoMode={isDemoMode} />
      case 'users':
        return <AdminUserManagement isDemoMode={isDemoMode} />
      case 'subscriptions':
        return <AdminSubscriptions isDemoMode={isDemoMode} />
      case 'habits':
        return <AdminHabitTracking isDemoMode={isDemoMode} />
      case 'logs':
        return <AdminSystemLogs isDemoMode={isDemoMode} />
      case 'error-logs':
        return <AdminErrorLogs isDemoMode={isDemoMode} />
      case 'settings':
        return <AdminSystemSettings isDemoMode={isDemoMode} />
      case 'health':
        return <AdminHealthCheck isDemoMode={isDemoMode} />
      case 'analytics':
        return <AdminAnalytics isDemoMode={isDemoMode} />
      case 'reports':
        return <AdminReports isDemoMode={isDemoMode} />
      default:
        return <AdminDashboardOverview isDemoMode={isDemoMode} />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard min-h-screen bg-gray-100 flex" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sidebar */}
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Top Navigation */}
        <AdminTopNav
          adminData={adminData}
          isDemoMode={isDemoMode}
          onLogout={handleLogout}
        />

        {/* Dashboard Content */}
        <main className="p-6">
          <AdminBreadcrumb />
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard