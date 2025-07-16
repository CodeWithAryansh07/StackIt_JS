import React from 'react'
import { questions } from '../constants'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    // const [questions, setQuestions] = React.useState([])

    const answeredQuestions = questions.filter(q => q.answer)

    const navigator = useNavigate();

    const handleBrowseAllQuestions = () => {
        navigator('/questions');
    }

    const handleAskQuestion = () => {
        navigator('/ask-a-question');
    }

    return (
        <div className="text-center mb-12 sm:mb-16">
            {/* Main Content */}
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 sm:mb-8 animate-fade-in leading-tight">
                    StackIt Q&A
                </h1>

                {/* Subtitle with Icons */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-400"></div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-purple-400"></div>
                </div>

                <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed px-4">
                    Get instant answers to your questions from our expert community.
                </p>
                <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                    Join thousands of developers, business professionals, and tech enthusiasts sharing knowledge.
                </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
                <button className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 font-semibold text-base sm:text-lg overflow-hidden" onClick={handleAskQuestion}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ask a Question
                </button>
                <button className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 hover:bg-slate-700/70 backdrop-blur-md border border-slate-600/50 hover:border-slate-500/70 text-slate-200 hover:text-white rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-slate-500/20 hover:scale-105 font-semibold text-base sm:text-lg overflow-hidden" onClick={handleBrowseAllQuestions}>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-white/10 to-slate-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden sm:inline">Browse All Questions</span>
                    <span className="sm:hidden">Browse Questions</span>
                </button>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
                <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{questions.length}</div>
                        <div className="text-slate-400 font-medium text-sm sm:text-base">Total Questions</div>
                    </div>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-green-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{answeredQuestions.length}</div>
                        <div className="text-slate-400 font-medium text-sm sm:text-base">Answered</div>
                    </div>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-slate-400 font-medium text-sm sm:text-base">Support</div>
                    </div>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                        <div className="text-slate-400 font-medium text-sm sm:text-base">Active Users</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero