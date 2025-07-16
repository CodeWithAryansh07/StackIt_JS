import React from 'react'
import { useNavigate } from 'react-router-dom'

const CookiePolicy = () => {
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
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-slate-400 text-lg">
                        How we use cookies and similar technologies
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
                    {/* What are Cookies */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">What are Cookies?</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                Cookies are small text files that are placed on your computer or mobile device when you 
                                visit a website. They are widely used to make websites work more efficiently and provide 
                                information to website owners.
                            </p>
                            <p>
                                StackIt uses cookies and similar technologies to enhance your browsing experience, 
                                analyze site traffic, and personalize content.
                            </p>
                        </div>
                    </section>

                    {/* Types of Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">Types of Cookies We Use</h2>
                        
                        <div className="space-y-6">
                            {/* Essential Cookies */}
                            <div className="bg-slate-700/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 bg-red-600/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                                    <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded text-xs">Required</span>
                                </div>
                                <p className="text-slate-300 mb-3">
                                    These cookies are necessary for the website to function properly and cannot be switched off.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4 text-slate-300">
                                    <li>Authentication and login status</li>
                                    <li>Security and fraud prevention</li>
                                    <li>Site navigation and functionality</li>
                                    <li>Shopping cart and form submissions</li>
                                </ul>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="bg-slate-700/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">Optional</span>
                                </div>
                                <p className="text-slate-300 mb-3">
                                    These cookies help us understand how visitors interact with our website.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4 text-slate-300">
                                    <li>Page views and user behavior</li>
                                    <li>Performance monitoring</li>
                                    <li>Error tracking and debugging</li>
                                    <li>Traffic sources and patterns</li>
                                </ul>
                            </div>

                            {/* Functional Cookies */}
                            <div className="bg-slate-700/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 bg-green-600/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                                    <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">Optional</span>
                                </div>
                                <p className="text-slate-300 mb-3">
                                    These cookies enable enhanced functionality and personalization.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4 text-slate-300">
                                    <li>User preferences and settings</li>
                                    <li>Language and region selection</li>
                                    <li>Theme and layout preferences</li>
                                    <li>Remembering form inputs</li>
                                </ul>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="bg-slate-700/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">Optional</span>
                                </div>
                                <p className="text-slate-300 mb-3">
                                    These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4 text-slate-300">
                                    <li>Targeted advertising</li>
                                    <li>Social media integration</li>
                                    <li>Campaign tracking</li>
                                    <li>Interest-based content</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Third-Party Cookies */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Third-Party Cookies</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>We may use third-party services that set their own cookies:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                                <li><strong>Social Media Plugins:</strong> For social sharing and authentication</li>
                                <li><strong>CDN Services:</strong> For content delivery and performance optimization</li>
                                <li><strong>Authentication Providers:</strong> For secure login and user management</li>
                            </ul>
                            <p>
                                These third-party services have their own privacy policies and cookie practices 
                                that we encourage you to review.
                            </p>
                        </div>
                    </section>

                    {/* Managing Cookies */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Managing Your Cookie Preferences</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>You have several options for managing cookies:</p>
                            
                            <div className="bg-slate-700/30 rounded-xl p-6 mt-4">
                                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                                <p className="text-slate-300 mb-3">
                                    Most browsers allow you to control cookies through their settings:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4 text-slate-300">
                                    <li>Block all cookies</li>
                                    <li>Block third-party cookies only</li>
                                    <li>Delete existing cookies</li>
                                    <li>Set preferences for specific websites</li>
                                </ul>
                            </div>

                            <div className="bg-slate-700/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent Manager</h3>
                                <p className="text-slate-300 mb-4">
                                    We provide a cookie consent manager that allows you to control which types 
                                    of cookies you want to accept.
                                </p>
                                <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200">
                                    Manage Cookie Preferences
                                </button>
                            </div>

                            <p className="text-yellow-400 text-sm">
                                <strong>Please note:</strong> Disabling certain cookies may affect the functionality 
                                of our website and your user experience.
                            </p>
                        </div>
                    </section>

                    {/* Cookie Retention */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Cookie Retention Periods</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>Different cookies have different retention periods:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                                <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                                <li><strong>Authentication Cookies:</strong> Usually expire after 30 days of inactivity</li>
                                <li><strong>Preference Cookies:</strong> May persist for up to 1 year</li>
                            </ul>
                        </div>
                    </section>

                    {/* Updates to Policy */}
                    <section className="border-t border-slate-700/50 pt-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Updates to This Policy</h3>
                        <p className="text-slate-300">
                            We may update this Cookie Policy from time to time to reflect changes in our practices 
                            or for other operational, legal, or regulatory reasons. We will notify you of any material 
                            changes by posting the updated policy on our website.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="bg-slate-700/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Questions About Cookies?</h3>
                        <p className="text-slate-300 mb-4">
                            If you have any questions about our use of cookies, please contact us:
                        </p>
                        <div className="text-slate-300 space-y-2">
                            <p><strong>Email:</strong> privacy@stackit.com</p>
                            <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CookiePolicy
