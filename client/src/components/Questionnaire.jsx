// import React, { useEffect } from 'react'
import Question from './Question'
import { questions } from '../constants'
import { useNavigate } from 'react-router-dom'
// import axios from "axios";

const Questionnaire = () => {
    // Filter to show only answered questions on the main page

    // const [questions, setQuestions] = React.useState([])

    const answeredQuestions = questions.filter(q => q.answer)

    const navigate = useNavigate();

    const handleBrowseAllQuestions = () => {
        navigate('/questions');
    }

    
    return (
    <div className="mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="px-4 sm:px-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Latest Answered Questions</h2>
                <p className="text-slate-400 text-base sm:text-lg">Discover solutions from our expert community</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto px-4 sm:px-0">
                {/* Sort Options */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-slate-400 font-medium text-sm sm:text-base">Sort by:</span>
                    <select className="bg-slate-800/50 backdrop-blur-md text-slate-200 border border-slate-600/50 hover:border-slate-500/70 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200">
                        <option>Most Recent</option>
                        <option>Most Voted</option>
                        <option>Most Helpful</option>
                        <option>Oldest First</option>
                    </select>
                </div>

                {/* Browse All Questions Button */}
                <button className="cursor-pointer flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 rounded-lg sm:rounded-xl transition-all duration-200 font-medium text-sm sm:text-base" onClick={handleBrowseAllQuestions}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="sm:inline">Browse All Questions</span>
                </button>
            </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            {answeredQuestions.length > 0 ? (
                answeredQuestions.slice(0, 6).map((question) => (
                    <Question key={question.id} question={question} />
                ))
            ) : (
                <div className="text-center py-12 sm:py-16 px-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-2 sm:mb-3">No answered questions yet</h3>
                    <p className="text-slate-400 text-base sm:text-lg mb-4 sm:mb-6">Be the first to contribute to our knowledge base!</p>
                    <button 
                        onClick={() => navigate('/ask-a-question')}
                        className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl transition-colors duration-200 text-sm sm:text-base"
                    >
                        Ask the First Question
                    </button>
                </div>
            )}
        </div>

        {/* Show More Button */}
        {answeredQuestions.length > 6 && (
            <div className="text-center mt-8 sm:mt-12 px-4">
                <button className="px-8 sm:px-10 py-3 sm:py-4 bg-slate-800/50 hover:bg-slate-700/70 backdrop-blur-md border border-slate-600/50 hover:border-slate-500/70 text-slate-200 hover:text-white rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-slate-500/20 hover:scale-105 font-semibold text-base sm:text-lg">
                    View More Answered Questions
                </button>
            </div>
        )}
    </div>
    )
}

export default Questionnaire