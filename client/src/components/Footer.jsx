import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const navigate = useNavigate()

    const handleNavigation = (path) => {
        navigate(path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleTopicClick = (topic) => {
        navigate(`/questions?tag=${topic.toLowerCase()}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.227-4.615 5.982 5.982 0 010-6.77A8.001 8.001 0 0121 12z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">StackIt</h3>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                            The ultimate Q&A platform for developers, students, and professionals. 
                            Get answers to your technical questions and help others grow.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            {/* Social Media Links */}
                            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/questions')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Browse Questions
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/ask-a-question')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Ask a Question
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-white">Popular Topics</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => handleTopicClick('JavaScript')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    JavaScript
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleTopicClick('React')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                    React
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleTopicClick('Python')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                    Python
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleTopicClick('Node.js')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                    Node.js
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleTopicClick('Java')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                    Java
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleTopicClick('Database')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                                    Database
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-white">Support & Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/community-guidelines')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Community Guidelines
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/privacy-policy')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/terms-of-service')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Terms of Service
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleNavigation('/cookie-policy')}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm text-left"
                                >
                                    Cookie Policy
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-800/50 mt-6 sm:mt-8 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400 text-xs sm:text-sm text-center sm:text-left">
                            <span>© {currentYear} StackIt. All rights reserved.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">Made with ❤️ for developers</span>
                        </div>
                        
                        <div className="flex items-center space-x-6">
                            {/* Theme Toggle */}
                            <button className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 text-sm transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <span>Dark Mode</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30"></div>
        </footer>
    )
}

export default Footer