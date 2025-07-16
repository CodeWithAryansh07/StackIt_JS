import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Question from '../components/Question'
import { questions } from '../constants'

const QuestionsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [activeLanguage, setActiveLanguage] = useState('all')
    const [sortBy, setSortBy] = useState('latest')
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    // Popular programming languages with colors
    const languages = useMemo(() => [
        { name: 'JavaScript', color: 'bg-yellow-500', textColor: 'text-yellow-400', borderColor: 'border-yellow-500/50' },
        { name: 'Python', color: 'bg-blue-500', textColor: 'text-blue-400', borderColor: 'border-blue-500/50' },
        { name: 'Java', color: 'bg-red-500', textColor: 'text-red-400', borderColor: 'border-red-500/50' },
        { name: 'React', color: 'bg-cyan-500', textColor: 'text-cyan-400', borderColor: 'border-cyan-500/50' },
        { name: 'Node.js', color: 'bg-green-500', textColor: 'text-green-400', borderColor: 'border-green-500/50' },
        { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-blue-400', borderColor: 'border-blue-600/50' },
        { name: 'PHP', color: 'bg-purple-500', textColor: 'text-purple-400', borderColor: 'border-purple-500/50' },
        { name: 'C++', color: 'bg-pink-500', textColor: 'text-pink-400', borderColor: 'border-pink-500/50' },
        { name: 'Rust', color: 'bg-orange-500', textColor: 'text-orange-400', borderColor: 'border-orange-500/50' },
        { name: 'Go', color: 'bg-teal-500', textColor: 'text-teal-400', borderColor: 'border-teal-500/50' }
    ], [])

    // Check URL parameters on component mount and when searchParams change
    useEffect(() => {
        const tagParam = searchParams.get('tag')
        if (tagParam) {
            // Find the matching language (case-insensitive)
            const matchingLanguage = languages.find(
                lang => lang.name.toLowerCase() === tagParam.toLowerCase()
            )
            if (matchingLanguage) {
                setActiveLanguage(matchingLanguage.name)
            } else {
                // If not in the predefined languages, still set it as active
                setActiveLanguage(tagParam)
            }
        } else {
            setActiveLanguage('all')
        }
    }, [searchParams, languages])

    // Filter questions based on active filter and language
    const getFilteredQuestions = () => {
        let filtered = questions

        // Filter by status
        switch (activeFilter) {
            case 'answered':
                filtered = filtered.filter(q => q.answer)
                break
            case 'unanswered':
                filtered = filtered.filter(q => !q.answer)
                break
            case 'recent':
                filtered = filtered.slice(0, 10) // Mock recent questions
                break
            default:
                break
        }

        // Filter by language/tag
        if (activeLanguage !== 'all') {
            filtered = filtered.filter(q => {
                if (q.tags) {
                    return q.tags.some(tag => tag.toLowerCase() === activeLanguage.toLowerCase())
                }
                // Fallback to check if language is mentioned in question or description
                const content = `${q.question} ${q.description || ''}`.toLowerCase()
                return content.includes(activeLanguage.toLowerCase())
            })
        }

        return filtered
    }

    const handleLanguageFilter = (language) => {
        setActiveLanguage(language)
        if (language !== 'all') {
            setSearchParams({ tag: language })
        } else {
            setSearchParams({})
        }
    }

    const filteredQuestions = getFilteredQuestions()

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* Page Header */}
            <div className="mb-8 sm:mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                            All Questions
                        </h1>
                        <p className="text-slate-400 text-base sm:text-lg">
                            Browse through all questions in our community. Find answers or contribute your knowledge.
                        </p>
                    </div>
                    
                    <button 
                        onClick={() => navigate('/ask-a-question')}
                        className="w-full md:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 font-medium text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Ask New Question
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">{questions.length}</div>
                        <div className="text-slate-400 text-xs sm:text-sm">Total Questions</div>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1">{questions.filter(q => q.answer).length}</div>
                        <div className="text-slate-400 text-xs sm:text-sm">Answered</div>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">{questions.filter(q => !q.answer).length}</div>
                        <div className="text-slate-400 text-xs sm:text-sm">Unanswered</div>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">24h</div>
                        <div className="text-slate-400 text-xs sm:text-sm">Response Time</div>
                    </div>
                </div>
            </div>

            {/* Filters and Sorting */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {/* Status Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-slate-300 font-semibold text-sm sm:text-base">Filter by Status:</span>
                        <button 
                            onClick={() => setActiveFilter('all')}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                                activeFilter === 'all' 
                                    ? 'bg-blue-600/30 text-blue-400 border border-blue-500/50' 
                                    : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                            }`}
                        >
                            All ({questions.length})
                        </button>
                        <button 
                            onClick={() => setActiveFilter('answered')}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                                activeFilter === 'answered' 
                                    ? 'bg-green-600/30 text-green-400 border border-green-500/50' 
                                    : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                            }`}
                        >
                            Answered ({questions.filter(q => q.answer).length})
                        </button>
                        <button 
                            onClick={() => setActiveFilter('unanswered')}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                                activeFilter === 'unanswered' 
                                    ? 'bg-yellow-600/30 text-yellow-400 border border-yellow-500/50' 
                                    : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                            }`}
                        >
                            Unanswered ({questions.filter(q => !q.answer).length})
                        </button>
                        <button 
                            onClick={() => setActiveFilter('recent')}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                                activeFilter === 'recent' 
                                    ? 'bg-purple-600/30 text-purple-400 border border-purple-500/50' 
                                    : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                            }`}
                        >
                            Recent
                        </button>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
                        <span className="text-slate-300 font-semibold text-sm sm:text-base">Sort by:</span>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-slate-800/50 backdrop-blur-md text-slate-200 border border-slate-600/50 hover:border-slate-500/70 rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 flex-1 lg:flex-none min-w-0"
                        >
                            <option value="latest">Latest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="most-voted">Most Voted</option>
                            <option value="most-answered">Most Answered</option>
                            <option value="trending">Trending</option>
                        </select>
                    </div>
                </div>

                {/* Language/Technology Filters */}
                <div className="p-4 sm:p-6 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="text-slate-300 font-semibold text-sm sm:text-base">Filter by Technology:</span>
                        <button 
                            onClick={() => handleLanguageFilter('all')}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                                activeLanguage === 'all' 
                                    ? 'bg-slate-600/50 text-white border border-slate-500/50' 
                                    : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                            }`}
                        >
                            All Technologies
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {languages.map((lang) => (
                            <button
                                key={lang.name}
                                onClick={() => handleLanguageFilter(lang.name)}
                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 ${
                                    activeLanguage === lang.name
                                        ? `${lang.color}/30 ${lang.textColor} border ${lang.borderColor}` 
                                        : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                                }`}
                            >
                                <span className={`w-2 h-2 ${lang.color} rounded-full`}></span>
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4 sm:space-y-6">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((question) => (
                        <Question key={question.id} question={question} />
                    ))
                ) : (
                    <div className="text-center py-20">
                        <div className="w-32 h-32 mx-auto mb-8 bg-slate-800/50 rounded-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-semibold text-slate-300 mb-4">No questions found</h3>
                        <p className="text-slate-400 text-lg mb-8">No questions match your current filter. Try adjusting your search criteria.</p>
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={() => setActiveFilter('all')}
                                className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-xl transition-all duration-200"
                            >
                                View All Questions
                            </button>
                            <button 
                                onClick={() => navigate('/ask-a-question')}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
                            >
                                Ask a Question
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {filteredQuestions.length > 0 && (
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-12 sm:mt-16">
                    <button className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
                        Previous
                    </button>
                    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto px-2">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-lg font-medium text-sm sm:text-base flex-shrink-0">1</button>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200 text-sm sm:text-base flex-shrink-0">2</button>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200 text-sm sm:text-base flex-shrink-0">3</button>
                        <span className="text-slate-500 px-1 sm:px-2 text-sm sm:text-base flex-shrink-0">...</span>
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200 text-sm sm:text-base flex-shrink-0">10</button>
                    </div>
                    <button className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200 text-sm sm:text-base">
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default QuestionsPage
