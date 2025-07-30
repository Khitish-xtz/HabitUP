import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AdminTopNav = ({ adminData, isDemoMode, onLogout }) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = [
    { id: 1, message: 'New user registration', time: '5 mins ago', type: 'info' },
    { id: 2, message: 'System backup completed', time: '1 hour ago', type: 'success' },
    { id: 3, message: 'Payment failed for user', time: '2 hours ago', type: 'warning' }
  ]

  return (
    <motion.div
      className="flex justify-between items-center p-5 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Search Bar */}
      <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 w-96">
        <i className="fas fa-search text-gray-400 mr-3"></i>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Quick Navigation */}
      <div className="flex items-center space-x-2">
        <motion.button
          onClick={() => navigate('/admin/users')}
          className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-users mr-2"></i>
          Users
        </motion.button>
        <motion.button
          onClick={() => navigate('/admin/analytics')}
          className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-chart-line mr-2"></i>
          Analytics
        </motion.button>
        <motion.button
          onClick={() => navigate('/admin/settings')}
          className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-cog mr-2"></i>
          Settings
        </motion.button>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <motion.button
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setShowNotifications(!showNotifications)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-bell text-gray-600 text-lg"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          </motion.button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <motion.div
              className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'info' ? 'bg-blue-500' :
                        notification.type === 'success' ? 'bg-green-500' :
                        'bg-yellow-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-gray-200">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  View all notifications
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="/img/user.png"
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">{adminData.name}</p>
            <p className="text-xs text-gray-500">{adminData.email}</p>
          </div>
          {isDemoMode && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
              DEMO
            </span>
          )}
        </div>

        {/* Logout Button */}
        <motion.button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-sign-out-alt mr-2"></i>
          Logout
        </motion.button>
      </div>
    </motion.div>
  )
}

export default AdminTopNav