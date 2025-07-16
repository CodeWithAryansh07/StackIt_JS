import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Question = ({ question }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [votes, setVotes] = useState(question.votes || 0)
    const [userVote, setUserVote] = useState(null) // 'up', 'down', or null
    const isAnswered = !!question.answer
    const navigate = useNavigate()

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    const handleQuestionClick = () => {
        navigate(`/question/${question.id}`)
    }

    const handleAnswerClick = (e) => {
        e.stopPropagation() // Prevent triggering question click
        navigate(`/question/${question.id}?showAnswerForm=true`)
    }

    // Function to strip HTML and truncate text
    const getDescriptionPreview = (htmlContent, maxLength = 150) => {
        if (!htmlContent) return ''
        const textContent = htmlContent.replace(/<[^>]*>/g, '')
        return textContent.length > maxLength 
            ? textContent.substring(0, maxLength) + '...' 
            : textContent
    }

    const handleVote = (voteType) => {
        if (userVote === voteType) {
            // Remove vote
            setVotes(votes - (voteType === 'up' ? 1 : -1))
            setUserVote(null)
        } else {
            // Add or change vote
            const voteChange = voteType === 'up' ? 1 : -1
            const previousVoteChange = userVote === 'up' ? -1 : userVote === 'down' ? 1 : 0
            setVotes(votes + voteChange + previousVoteChange)
            setUserVote(voteType)
        }
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-900/20">
            {/* Question Header */}
            <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                <div className="flex items-start gap-3 sm:gap-4">
                    {/* Voting Section */}
                    <div className="flex flex-col items-center gap-1 min-w-[40px] sm:min-w-[50px]">
                        <button
                            onClick={() => handleVote('up')}
                            className={`p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                                userVote === 'up' 
                                    ? 'bg-green-600/30 text-green-400' 
                                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-green-400'
                            }`}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4l8 8H4l8-8z"/>
                            </svg>
                        </button>
                        <span className={`text-base sm:text-lg font-bold ${votes > 0 ? 'text-green-400' : votes < 0 ? 'text-red-400' : 'text-slate-400'}`}>
                            {votes}
                        </span>
                        <button
                            onClick={() => handleVote('down')}
                            className={`p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                                userVote === 'down' 
                                    ? 'bg-red-600/30 text-red-400' 
                                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-red-400'
                            }`}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 20l-8-8h16l-8 8z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 min-w-0">
                        <div 
                            className="cursor-pointer"
                            onClick={handleQuestionClick}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2 sm:mb-3 hover:text-blue-400 transition-colors duration-200 break-words">
                                {question.question}
                            </h3>

                            {/* Description Preview */}
                            {question.description && (
                                <div className="mb-3 sm:mb-4">
                                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                        {getDescriptionPreview(question.description)}
                                    </p>
                                </div>
                            )}
                            
                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 mb-3">
                                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                                    isAnswered 
                                        ? 'bg-green-600/20 text-green-400' 
                                        : 'bg-yellow-600/20 text-yellow-400'
                                }`}>
                                    {isAnswered ? '✓ Answered' : '⏳ Pending'}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="hidden sm:inline">{question.timestamp ? new Date(question.timestamp).toLocaleDateString() : '2 hours ago'}</span>
                                    <span className="sm:hidden">2h</span>
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="truncate max-w-[100px] sm:max-w-none">{question.author || 'Anonymous User'}</span>
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex items-center gap-1 sm:gap-2 mb-3 flex-wrap">
                                {question.tags && question.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                                        {tag}
                                    </span>
                                ))}
                                {!question.tags && (
                                    <>
                                        <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">odoo</span>
                                        <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">business</span>
                                        <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">software</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <button
                                onClick={toggleExpanded}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 text-xs sm:text-sm"
                            >
                                <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                {isExpanded ? 'Hide Answer' : 'View Answer'}
                            </button>
                            <button 
                                onClick={handleAnswerClick}
                                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200 text-xs sm:text-sm"
                            >
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.227-4.615 5.982 5.982 0 010-6.77A8.001 8.001 0 0121 12z" />
                                </svg>
                                <span className="hidden sm:inline">Answer</span>
                                <span className="sm:hidden">Reply</span>
                            </button>
                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-slate-700/30 hover:bg-slate-600/30 text-slate-400 hover:text-slate-300 rounded-lg transition-all duration-200 text-xs sm:text-sm">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="hidden sm:inline">Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Answer Section */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="border-t border-slate-700/50 pt-4">
                        {question.answer ? (
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 bg-green-600/20 rounded-lg">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                        <h4 className="text-base sm:text-lg font-medium text-green-400">Best Answer</h4>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Expert User
                                        </div>
                                    </div>
                                    <p className="text-slate-200 leading-relaxed text-sm sm:text-base break-words">
                                        {question.answer}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 text-xs sm:text-sm text-slate-400">
                                        <span>Answered 1 hour ago</span>
                                        <button className="hover:text-blue-400 transition-colors">Reply</button>
                                        <button className="hover:text-green-400 transition-colors">Helpful</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8 text-slate-400">
                                <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-lg mb-2">No answers yet</p>
                                <p className="text-sm">Be the first to answer this question!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
