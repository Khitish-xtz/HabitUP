import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Mock user data for testing
const mockUsers = [
  {
    id: 1,
    email: 'user@habitup.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'Adult',
    userType: 'Adult',
    subscriptionType: 'Free',
    isEmailVerified: true,
    phone: '+1234567890',
    dateOfBirth: '1990-01-01',
    gender: 'MALE',
    profilePicture: null,
    joinDate: '2024-01-01',
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en'
    }
  },
  {
    id: 2,
    email: 'child@habitup.com',
    password: 'password123',
    firstName: 'Emma',
    lastName: 'Smith',
    role: 'Child',
    userType: 'Child',
    subscriptionType: 'Premium',
    isEmailVerified: true,
    phone: '+1987654321',
    dateOfBirth: '2015-05-15',
    gender: 'FEMALE',
    profilePicture: null,
    joinDate: '2024-01-15',
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en'
    }
  },
  {
    id: 3,
    email: 'elder@habitup.com',
    password: 'password123',
    firstName: 'Robert',
    lastName: 'Johnson',
    role: 'Elder',
    userType: 'Elder',
    subscriptionType: 'Premium',
    isEmailVerified: true,
    phone: '+1555666777',
    dateOfBirth: '1955-03-20',
    gender: 'MALE',
    profilePicture: null,
    joinDate: '2024-02-01',
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en'
    }
  },
  {
    id: 4,
    email: 'doctor@habitup.com',
    password: 'password123',
    firstName: 'Dr. Sarah',
    lastName: 'Wilson',
    role: 'Doctor',
    userType: 'Doctor',
    subscriptionType: 'Professional',
    isEmailVerified: true,
    phone: '+1888999000',
    dateOfBirth: '1980-08-10',
    gender: 'FEMALE',
    profilePicture: null,
    joinDate: '2024-01-10',
    preferences: {
      theme: 'dark',
      notifications: true,
      language: 'en'
    }
  }
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is authenticated on app load
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const userData = localStorage.getItem('habitup_user')
      const token = localStorage.getItem('habitup_token')
      
      if (userData && token) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      localStorage.removeItem('habitup_user')
      localStorage.removeItem('habitup_token')
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Find user in mock data
      const foundUser = mockUsers.find(
        u => u.email === credentials.email && u.password === credentials.password
      )
      
      if (foundUser) {
        // Create mock token
        const token = `mock_token_${foundUser.id}_${Date.now()}`
        
        // Store in localStorage (matching HTML structure)
        localStorage.setItem('token', token)
        localStorage.setItem('habitup_token', token)
        localStorage.setItem('habitup_user', JSON.stringify(foundUser))
        
        // Store individual fields for HTML compatibility
        localStorage.setItem('name', `${foundUser.firstName} ${foundUser.lastName}`)
        localStorage.setItem('email', foundUser.email)
        localStorage.setItem('userType', foundUser.userType)
        localStorage.setItem('subscriptionType', foundUser.subscriptionType)
        localStorage.setItem('phoneNo', foundUser.phone)
        localStorage.setItem('dob', foundUser.dateOfBirth)
        localStorage.setItem('gender', foundUser.gender)
        localStorage.setItem('joinDate', foundUser.joinDate)
        localStorage.setItem('userId', foundUser.id.toString())
        
        // Update state
        setUser(foundUser)
        setIsAuthenticated(true)
        
        console.log('Login successful, user authenticated:', foundUser)
        
        return { success: true, user: foundUser }
      } else {
        return { success: false, message: 'Invalid email or password' }
      }
    } catch (error) {
      console.error('Login failed:', error)
      return { 
        success: false, 
        message: 'Login failed. Please try again.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email)
      if (existingUser) {
        return { success: false, message: 'User with this email already exists' }
      }
      
      // Create new user (in real app, this would be saved to database)
      const newUser = {
        id: mockUsers.length + 1,
        ...userData,
        role: 'user',
        isEmailVerified: true, // Auto-verify for demo
        profilePicture: null,
        preferences: {
          theme: 'light',
          notifications: true,
          language: 'en'
        }
      }
      
      // Add to mock users (this won't persist in real demo)
      mockUsers.push(newUser)
      
      return { success: true, message: 'Registration successful! You can now login.' }
    } catch (error) {
      console.error('Registration failed:', error)
      return { 
        success: false, 
        message: 'Registration failed. Please try again.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      // Clear local state
      localStorage.clear()
      setUser(null)
      setIsAuthenticated(false)
      
      // Redirect to home page
      window.location.href = '/'
    }
  }

  const updateProfile = async (profileData) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Update user data
      const updatedUser = { ...user, ...profileData }
      
      // Update localStorage
      localStorage.setItem('habitup_user', JSON.stringify(updatedUser))
      
      // Update state
      setUser(updatedUser)
      
      return { success: true, user: updatedUser }
    } catch (error) {
      console.error('Profile update failed:', error)
      return { 
        success: false, 
        message: 'Profile update failed.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const changePassword = async (passwordData) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you'd verify the current password
      // For demo, just simulate success
      return { success: true, message: 'Password changed successfully!' }
    } catch (error) {
      console.error('Password change failed:', error)
      return { 
        success: false, 
        message: 'Password change failed.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const forgotPassword = async (email) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return { success: true, message: 'Password reset email sent! (Demo mode)' }
    } catch (error) {
      console.error('Forgot password failed:', error)
      return { 
        success: false, 
        message: 'Failed to send reset email.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (token, newPassword) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return { success: true, message: 'Password reset successful! (Demo mode)' }
    } catch (error) {
      console.error('Password reset failed:', error)
      return { 
        success: false, 
        message: 'Password reset failed.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const verifyEmail = async (token) => {
    try {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return { success: true, message: 'Email verified successfully! (Demo mode)' }
    } catch (error) {
      console.error('Email verification failed:', error)
      return { 
        success: false, 
        message: 'Email verification failed.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  const refreshToken = async () => {
    try {
      // In demo mode, just return true if user exists
      if (user) {
        return true
      } else {
        logout()
        return false
      }
    } catch (error) {
      console.error('Token refresh failed:', error)
      logout()
      return false
    }
  }

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    forgotPassword,
    resetPassword,
    verifyEmail,
    refreshToken,
    checkAuthStatus
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext