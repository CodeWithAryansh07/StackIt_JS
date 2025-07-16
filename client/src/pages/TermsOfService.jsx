import React from 'react'
import { useNavigate } from 'react-router-dom'

const TermsOfService = () => {
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
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-slate-400 text-lg">
                        The rules and regulations for using StackIt
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
                    {/* Agreement */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                By accessing and using StackIt ("the Service"), you accept and agree to be bound by 
                                the terms and provision of this agreement.
                            </p>
                            <p>
                                If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>
                    </section>

                    {/* Use License */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Use License</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                Permission is granted to temporarily access StackIt for personal, non-commercial 
                                transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to reverse engineer any software contained on the platform</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                            <p>
                                This license shall automatically terminate if you violate any of these restrictions 
                                and may be terminated by us at any time.
                            </p>
                        </div>
                    </section>

                    {/* User Accounts */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">User Accounts</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>When you create an account with us, you must provide accurate and complete information.</p>
                            <p>You are responsible for:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Safeguarding your password and account information</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                                <li>Ensuring your contact information is current</li>
                            </ul>
                            <p>
                                We reserve the right to refuse service, terminate accounts, or cancel orders 
                                in our sole discretion.
                            </p>
                        </div>
                    </section>

                    {/* Content */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">User Content</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>By posting content on StackIt, you:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Grant us a non-exclusive, royalty-free license to use, modify, and display your content</li>
                                <li>Represent that you own or have rights to the content</li>
                                <li>Agree that your content does not violate any laws or third-party rights</li>
                                <li>Understand that your content may be publicly visible</li>
                            </ul>
                            <p>We reserve the right to remove content that violates our community guidelines.</p>
                        </div>
                    </section>

                    {/* Prohibited Uses */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Prohibited Uses</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>You may not use our service:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                                <li>To submit false or misleading information</li>
                                <li>To upload or transmit viruses or any other type of malicious code</li>
                                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                                <li>For any obscene or immoral purpose</li>
                                <li>To interfere with or circumvent the security features of the service</li>
                            </ul>
                        </div>
                    </section>

                    {/* Service Availability */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Service Availability</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                We strive to provide reliable service but cannot guarantee 100% uptime. 
                                The service may be temporarily unavailable due to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Scheduled maintenance</li>
                                <li>Technical difficulties</li>
                                <li>Third-party service outages</li>
                                <li>Force majeure events</li>
                            </ul>
                            <p>
                                We reserve the right to modify or discontinue the service at any time without notice.
                            </p>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Disclaimer</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                The information on this platform is provided on an "as is" basis. To the fullest 
                                extent permitted by law, this Company:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Excludes all representations and warranties relating to this website and its contents</li>
                                <li>Does not warrant the accuracy, completeness, or usefulness of any information</li>
                                <li>Makes no warranties about the reliability or suitability of the service</li>
                            </ul>
                            <p className="text-yellow-400">
                                <strong>Use at your own risk:</strong> Any reliance you place on such information is strictly at your own risk.
                            </p>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                In no event shall StackIt, nor its directors, employees, partners, agents, suppliers, 
                                or affiliates, be liable for any indirect, incidental, special, consequential, or 
                                punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                                or other intangible losses, resulting from your use of the service.
                            </p>
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                These Terms shall be interpreted and governed by the laws of the State/Country where 
                                StackIt is headquartered, without regard to its conflict of law provisions.
                            </p>
                            <p>
                                Our failure to enforce any right or provision of these Terms will not be considered 
                                a waiver of those rights.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Terms */}
                    <section className="border-t border-slate-700/50 pt-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Changes to Terms</h3>
                        <p className="text-slate-300">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                            If a revision is material, we will try to provide at least 30 days notice prior to any new 
                            terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>

                    {/* Contact Information */}
                    {/* <section className="bg-slate-700/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                        <p className="text-slate-300 mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="text-slate-300 space-y-2">
                            <p><strong>Email:</strong> legal@stackit.com</p>
                            <p><strong>Address:</strong> StackIt Legal Team, 123 Tech Street, Developer City, DC 12345</p>
                        </div>
                    </section> */}
                </div>
            </div>
        </div>
    )
}

export default TermsOfService
