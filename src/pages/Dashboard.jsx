import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Dashboard = () => {
    const [habits, setHabits] = useState([
        { id: 1, name: 'Morning Meditation', completed: true, streak: 15, target: 30 },
        { id: 2, name: 'Daily Exercise', completed: false, streak: 8, target: 21 },
        { id: 3, name: 'Read for 30 minutes', completed: true, streak: 22, target: 30 },
        { id: 4, name: 'Drink 8 glasses of water', completed: false, streak: 5, target: 14 },
        { id: 5, name: 'Write in journal', completed: true, streak: 12, target: 21 }
    ])

    const [showAddHabit, setShowAddHabit] = useState(false)
    const [newHabit, setNewHabit] = useState({ name: '', target: 21 })

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }, [])

    const toggleHabit = (id) => {
        setHabits(habits.map(habit =>
            habit.id === id
                ? { ...habit, completed: !habit.completed, streak: habit.completed ? habit.streak : habit.streak + 1 }
                : habit
        ))
    }

    const addHabit = (e) => {
        e.preventDefault()
        if (newHabit.name.trim()) {
            const habit = {
                id: Date.now(),
                name: newHabit.name,
                completed: false,
                streak: 0,
                target: parseInt(newHabit.target)
            }
            setHabits([...habits, habit])
            setNewHabit({ name: '', target: 21 })
            setShowAddHabit(false)
        }
    }

    const deleteHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id))
    }

    const completedToday = habits.filter(h => h.completed).length
    const totalHabits = habits.length
    const completionRate = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0
    const bestStreak = Math.max(...habits.map(h => h.streak), 0)

    return (
        <div className="pt-16 sm:pt-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8" data-aos="fade-up">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                        Welcome back! 👋
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Track your habits and build a better you, one day at a time.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-600 text-xs sm:text-sm truncate">Today's Progress</p>
                                <motion.p
                                    className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                >
                                    {completedToday}/{totalHabits}
                                </motion.p>
                            </div>
                            <motion.div
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <i className="fas fa-check-circle text-sm sm:text-base lg:text-lg"></i>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-600 text-xs sm:text-sm truncate">Completion Rate</p>
                                <motion.p
                                    className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                                >
                                    {completionRate}%
                                </motion.p>
                            </div>
                            <motion.div
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <i className="fas fa-chart-line text-sm sm:text-base lg:text-lg"></i>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Best Streak</p>
                                <motion.p
                                    className="text-2xl font-bold text-orange-600"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                >
                                    {bestStreak} days
                                </motion.p>
                            </div>
                            <motion.div
                                className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <i className="fas fa-fire"></i>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Habits</p>
                                <motion.p
                                    className="text-2xl font-bold text-purple-600"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                                >
                                    {totalHabits}
                                </motion.p>
                            </div>
                            <motion.div
                                className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <i className="fas fa-list-check"></i>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Habits List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Today's Habits</h2>
                                <button
                                    onClick={() => setShowAddHabit(true)}
                                    className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                                >
                                    <i className="fas fa-plus mr-1 sm:mr-2"></i>
                                    <span className="hidden sm:inline">Add Habit</span>
                                    <span className="sm:hidden">Add</span>
                                </button>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <AnimatePresence>
                                    {habits.map((habit, index) => (
                                        <motion.div
                                            key={habit.id}
                                            className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${habit.completed
                                                    ? 'bg-green-50 border-green-200'
                                                    : 'bg-gray-50 border-gray-200 hover:border-blue-300'
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            layout
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                                                    <motion.button
                                                        onClick={() => toggleHabit(habit.id)}
                                                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${habit.completed
                                                                ? 'bg-green-500 border-green-500 text-white'
                                                                : 'border-gray-300 hover:border-blue-500'
                                                            }`}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        animate={habit.completed ? { rotate: 360 } : { rotate: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {habit.completed && (
                                                            <motion.i
                                                                className="fas fa-check text-xs"
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ type: "spring", stiffness: 500 }}
                                                            />
                                                        )}
                                                    </motion.button>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className={`font-medium text-sm sm:text-base truncate ${habit.completed ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                                                            {habit.name}
                                                        </h3>
                                                        <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                                                            <span className="flex items-center">
                                                                <i className="fas fa-fire text-orange-500 mr-1"></i>
                                                                {habit.streak} day streak
                                                            </span>
                                                            <span className="flex items-center">
                                                                <i className="fas fa-target text-blue-500 mr-1"></i>
                                                                Goal: {habit.target} days
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2 flex-shrink-0">
                                                    <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className="bg-blue-600 h-2 rounded-full transition-all"
                                                            style={{ width: `${Math.min((habit.streak / habit.target) * 100, 100)}%` }}
                                                        ></div>
                                                    </div>
                                                    <motion.button
                                                        onClick={() => deleteHabit(habit.id)}
                                                        className="text-red-500 hover:text-red-700 p-1"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.8 }}
                                                    >
                                                        <i className="fas fa-trash text-xs sm:text-sm"></i>
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Progress Chart */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Weekly Progress</h3>
                            <div className="space-y-3">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                    <div key={day} className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 w-8">{day}</span>
                                        <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{ width: `${Math.random() * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-600 w-8 text-right">
                                            {Math.floor(Math.random() * 5) + 1}/5
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-4 sm:p-6" data-aos="fade-up" data-aos-delay="700">
                            <h3 className="text-base sm:text-lg font-semibold mb-3">Daily Motivation</h3>
                            <p className="text-xs sm:text-sm italic leading-relaxed">
                                "Success is the sum of small efforts repeated day in and day out."
                            </p>
                            <p className="text-xs mt-2 opacity-80">- Robert Collier</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6" data-aos="fade-up" data-aos-delay="800">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                            <div className="space-y-2 sm:space-y-3">
                                <button className="w-full text-left p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                                    <i className="fas fa-chart-bar text-blue-600 mr-2 sm:mr-3"></i>
                                    View Analytics
                                </button>
                                <button className="w-full text-left p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                                    <i className="fas fa-calendar text-green-600 mr-2 sm:mr-3"></i>
                                    Set Reminders
                                </button>
                                <button className="w-full text-left p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                                    <i className="fas fa-users text-purple-600 mr-2 sm:mr-3"></i>
                                    Join Community
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Habit Modal */}
            <AnimatePresence>
                {showAddHabit && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-4">Add New Habit</h3>
                            <form onSubmit={addHabit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                        Habit Name
                                    </label>
                                    <input
                                        type="text"
                                        value={newHabit.name}
                                        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                        placeholder="e.g., Morning walk"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Target Days
                                    </label>
                                    <select
                                        value={newHabit.target}
                                        onChange={(e) => setNewHabit({ ...newHabit, target: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value={7}>7 days</option>
                                        <option value={14}>14 days</option>
                                        <option value={21}>21 days</option>
                                        <option value={30}>30 days</option>
                                        <option value={60}>60 days</option>
                                        <option value={90}>90 days</option>
                                    </select>
                                </div>
                                <div className="flex space-x-4">
                                    <motion.button
                                        type="button"
                                        onClick={() => setShowAddHabit(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        type="submit"
                                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Add Habit
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Dashboard 