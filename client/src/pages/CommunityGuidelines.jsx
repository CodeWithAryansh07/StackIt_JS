import React from 'react'
import { useNavigate } from 'react-router-dom'

const CommunityGuidelines = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-900 py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        Community Guidelines
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Help us maintain a respectful and helpful community for everyone
                    </p>
                </div>

                {/* Content */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
                    {/* Be Respectful */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Be Respectful</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>Treat all community members with respect and kindness. We welcome people of all backgrounds and experience levels.</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Use inclusive language</li>
                                <li>Be patient with beginners</li>
                                <li>Avoid personal attacks or harassment</li>
                                <li>Respect different opinions and approaches</li>
                            </ul>
                        </div>
                    </section>

                    {/* Ask Good Questions */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Ask Good Questions</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>Help us help you by asking clear, detailed questions.</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Include relevant code snippets</li>
                                <li>Describe what you've already tried</li>
                                <li>Explain your expected vs actual results</li>
                                <li>Add relevant tags to categorize your question</li>
                                <li>Search for existing answers before posting</li>
                            </ul>
                        </div>
                    </section>

                    {/* Provide Quality Answers */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Provide Quality Answers</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>When answering questions, strive to be helpful and educational.</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide complete, working solutions when possible</li>
                                <li>Explain your reasoning and approach</li>
                                <li>Include relevant documentation links</li>
                                <li>Test your code before posting</li>
                                <li>Edit and improve your answers over time</li>
                            </ul>
                        </div>
                    </section>

                    {/* No Spam or Self-Promotion */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">No Spam or Excessive Self-Promotion</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>Keep the focus on helping the community learn and grow.</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Don't post duplicate questions</li>
                                <li>Avoid excessive promotion of your own projects</li>
                                <li>Don't post irrelevant content</li>
                                <li>No affiliate links or advertising</li>
                            </ul>
                        </div>
                    </section>

                    {/* Use Appropriate Tags */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Use Appropriate Tags</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>Help others find and categorize your content with proper tagging.</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Use specific technology tags (e.g., javascript, python, react)</li>
                                <li>Include relevant framework or library tags</li>
                                <li>Add difficulty level tags when appropriate</li>
                                <li>Don't use too many tags (3-5 is usually sufficient)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Enforcement */}
                    <section className="border-t border-slate-700/50 pt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Enforcement</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>Violations of these guidelines may result in:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Content removal</li>
                                <li>Temporary suspension</li>
                                <li>Permanent account ban for severe or repeated violations</li>
                            </ul>
                            <p className="mt-4">
                                If you see content that violates these guidelines, please report it to our moderation team.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    {/* <section className="bg-slate-700/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Questions about these guidelines?</h3>
                        <p className="text-slate-300 mb-4">
                            If you have questions about our community guidelines or need clarification on any point, 
                            feel free to reach out to our community team.
                        </p>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                            Contact Community Team
                        </button>
                    </section> */}
                </div>
            </div>
        </div>
    )
}

export default CommunityGuidelines
