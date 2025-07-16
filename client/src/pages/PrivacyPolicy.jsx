import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
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
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-400 text-lg">
                        How we collect, use, and protect your information
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                        <div className="text-slate-300 space-y-3">
                            <p>
                                At StackIt, we take your privacy seriously. This Privacy Policy explains how we collect, 
                                use, disclose, and safeguard your information when you visit our Q&A platform.
                            </p>
                            <p>
                                By using our service, you agree to the collection and use of information in accordance 
                                with this policy.
                            </p>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-200 mb-3">Personal Information</h3>
                                <div className="text-slate-300 space-y-2">
                                    <p>When you create an account, we collect:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Email address</li>
                                        <li>Username/Display name</li>
                                        <li>Profile information (optional)</li>
                                        <li>Password (encrypted)</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-200 mb-3">Content Information</h3>
                                <div className="text-slate-300 space-y-2">
                                    <p>When you use our platform, we collect:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Questions and answers you post</li>
                                        <li>Comments and votes</li>
                                        <li>Tags and categories</li>
                                        <li>User interactions (likes, shares, follows)</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-200 mb-3">Technical Information</h3>
                                <div className="text-slate-300 space-y-2">
                                    <p>We automatically collect:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>IP address and location data</li>
                                        <li>Browser type and version</li>
                                        <li>Device information</li>
                                        <li>Usage patterns and analytics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Information */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>We use the collected information for:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Providing and maintaining our service</li>
                                <li>Personalizing your experience</li>
                                <li>Facilitating communication between users</li>
                                <li>Improving our platform and features</li>
                                <li>Sending important notifications</li>
                                <li>Preventing fraud and ensuring security</li>
                                <li>Complying with legal obligations</li>
                            </ul>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Information Sharing</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>We do not sell your personal information. We may share information in these cases:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Public Content:</strong> Questions, answers, and comments are public by design</li>
                                <li><strong>Service Providers:</strong> With trusted third parties who help operate our platform</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                                <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales</li>
                                <li><strong>Consent:</strong> When you explicitly agree to sharing</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>We implement industry-standard security measures:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>SSL/TLS encryption for data transmission</li>
                                <li>Secure password hashing and storage</li>
                                <li>Regular security audits and updates</li>
                                <li>Limited access to personal information</li>
                                <li>Secure data centers and infrastructure</li>
                            </ul>
                            <p className="text-yellow-400 text-sm">
                                <strong>Note:</strong> No method of internet transmission is 100% secure. 
                                While we strive to protect your data, we cannot guarantee absolute security.
                            </p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Your Rights and Choices</h2>
                        </div>
                        <div className="text-slate-300 space-y-3">
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Access and review your personal information</li>
                                <li>Update or correct your account information</li>
                                <li>Delete your account and associated data</li>
                                <li>Opt-out of non-essential communications</li>
                                <li>Request data portability</li>
                                <li>Withdraw consent where applicable</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Information */}
                    {/* <section className="bg-slate-700/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                        <p className="text-slate-300 mb-4">
                            If you have questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="text-slate-300 space-y-2">
                            <p><strong>Email:</strong> privacy@stackit.com</p>
                            <p><strong>Address:</strong> StackIt Privacy Team, 123 Tech Street, Developer City, DC 12345</p>
                        </div>
                    </section> */}

                    {/* Changes to Policy */}
                    <section className="border-t border-slate-700/50 pt-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Changes to This Policy</h3>
                        <p className="text-slate-300">
                            We may update this Privacy Policy from time to time. We will notify you of any changes 
                            by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                            We encourage you to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
