import { useState, useEffect } from 'react'

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { title: 'Total Users', value: '2,847', icon: 'fas fa-users', color: 'bg-blue-500' },
    { title: 'Active Habits', value: '12,394', icon: 'fas fa-chart-line', color: 'bg-green-500' },
    { title: 'Completed Goals', value: '8,756', icon: 'fas fa-trophy', color: 'bg-yellow-500' },
    { title: 'Revenue', value: '$45,230', icon: 'fas fa-dollar-sign', color: 'bg-purple-500' }
  ]

  const recentUsers = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active', joined: '2024-01-15' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Premium', joined: '2024-01-14' },
    { name: 'Mike Johnson', email: 'mike@example.com', status: 'Active', joined: '2024-01-13' }
  ]

  const menuItems = [
    { id: 'overview', icon: 'fas fa-tachometer-alt', label: 'Overview' },
    { id: 'users', icon: 'fas fa-users', label: 'Users' },
    { id: 'habits', icon: 'fas fa-list-check', label: 'Habits' },
    { id: 'analytics', icon: 'fas fa-chart-bar', label: 'Analytics' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-purple-600 to-blue-600 text-white transition-all duration-300 z-50 ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className={`font-bold text-xl ${sidebarOpen ? 'block' : 'hidden'}`}>
              HabitUP Admin
            </h2>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                activeSection === item.id ? 'bg-white/20 border-r-4 border-white' : ''
              }`}
            >
              <i className={`${item.icon} w-5`}></i>
              <span className={`ml-3 ${sidebarOpen ? 'block' : 'hidden'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              {activeSection}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <i className="fas fa-bell text-gray-600"></i>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="/img/user.png"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${stat.icon} text-white`}></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts and Tables */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-gray-600">Name</th>
                          <th className="text-left py-2 text-gray-600">Status</th>
                          <th className="text-left py-2 text-gray-600">Joined</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3">
                              <div>
                                <p className="font-medium text-gray-800">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                user.status === 'Premium' 
                                  ? 'bg-yellow-100 text-yellow-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3 text-gray-600">{user.joined}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Activity Chart Placeholder */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">User Activity</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'users' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">User Management</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Add User
                </button>
              </div>
              <div className="text-center py-12">
                <i className="fas fa-users text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">User management interface will be implemented here</p>
              </div>
            </div>
          )}

          {activeSection === 'habits' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Habit Management</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Create Habit Template
                </button>
              </div>
              <div className="text-center py-12">
                <i className="fas fa-list-check text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Habit management interface will be implemented here</p>
              </div>
            </div>
          )}

          {activeSection === 'analytics' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Analytics Dashboard</h2>
              <div className="text-center py-12">
                <i className="fas fa-chart-bar text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Analytics dashboard will be implemented here</p>
              </div>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">System Settings</h2>
              <div className="text-center py-12">
                <i className="fas fa-cog text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Settings panel will be implemented here</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard