import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) // Login state

    const profileDropdownRef = useRef(null)
    const notificationDropdownRef = useRef(null)

    // const [user, setUser] = useState({ username: '', email: '' })


    

    const navigator = useNavigate()

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        // You can add logic here to actually toggle the theme
        document.documentElement.classList.toggle('dark')
    }

    const handleLogin = () => {
        navigator('/login')
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setShowProfileDropdown(false)
        // Here you would normally handle actual logout logic
        console.log('User logged out')
    }

    // Mock notifications data
    const notifications = [
        { id: 1, message: "John answered your question about React", time: "2 minutes ago", read: false },
        { id: 2, message: "Your question received 5 new votes", time: "1 hour ago", read: false },
        { id: 3, message: "Sarah commented on your answer", time: "3 hours ago", read: true },
        { id: 4, message: "New question in JavaScript category", time: "1 day ago", read: true },
    ]

    const unreadCount = notifications.filter(n => !n.read).length

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setShowProfileDropdown(false)
            }
            if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
                setShowNotificationDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav className="flex w-full justify-between items-center px-4 sm:px-6 md:px-12 py-4 sm:py-6 bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    StackIt
                </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                {/* Add Question Button */}
                {/* <button className='cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                    </svg>
                    <span className='hidden sm:inline font-medium'>Add Question</span>
                </button> */}

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 sm:p-2.5 cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-slate-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500/50"
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? (
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    )}
                </button>

                {/* Notifications Dropdown */}
                <div className="relative" ref={notificationDropdownRef}>
                    <button
                        onClick={() =>
                            setShowNotificationDropdown(!showNotificationDropdown)
                        }
                        className="relative p-2 sm:p-2.5 cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-slate-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500/50"
                        title="Notifications"
                    >
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        {unreadCount > 0 && (
                            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                                {unreadCount}
                            </div>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {showNotificationDropdown && (
                        <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl z-50">
                            <div className="p-3 sm:p-4 border-b border-slate-700/50">
                                <h3 className="text-white font-semibold text-sm sm:text-base">
                                    Notifications
                                </h3>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`p-3 border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors relative ${!notification.read ? "bg-blue-500/10" : ""
                                            }`}
                                    >
                                        <p className="text-slate-300 text-sm pr-6">
                                            {notification.message}
                                        </p>
                                        <p className="text-slate-500 text-xs mt-1">
                                            {notification.time}
                                        </p>
                                        {!notification.read && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full absolute right-3 top-4"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t border-slate-700/50">
                                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                                    Mark all as read
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile/Login Section */}
                <div className="relative" ref={profileDropdownRef}>
                    {isLoggedIn ? (
                        <button
                            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                            className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        >
                            <span className="text-white font-semibold text-sm">JD</span>
                        </button>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg sm:rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            Login
                        </button>
                    )}

                    {/* Profile Dropdown */}
                    {showProfileDropdown && isLoggedIn && (
                        <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl z-50">
                            <div className="p-3 border-b border-slate-700/50">
                                <p className="text-white font-semibold text-sm sm:text-base">
                                    {user.username}
                                </p>
                                <p className="text-slate-400 text-xs sm:text-sm">
                                    {user.email}
                                </p>
                            </div>
                            <div className="py-2">
                                <button className="w-full px-4 py-2 text-left text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    View Profile
                                </button>
                                <button className="w-full px-4 py-2 text-left text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    Settings
                                </button>
                            </div>
                            <div className="border-t border-slate-700/50 py-2">
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar