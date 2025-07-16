import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        subscribeNewsletter: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const validateForm = () => {
        const newErrors = {}

        // Name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long'
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        // Terms agreement validation
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the Terms of Service and Privacy Policy'
        }



        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        try {
            const response = await axios.post(
                import.meta.env.VITE_BACKEND_URI + '/api/users/register',
                {
                    username: formData.firstName + '_' + formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    role: "USER",
                    status: "ACTIVE",
                    provider: "LOCAL",
                    subscribeNewsletter: formData.subscribeNewsletter
                },
            )

            console.log(response)
            // Handle success (e.g., redirect to login or dashboard)
            navigate('/login')
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors)
            } else {
                setErrors({ general: 'Registration failed. Please try again.' })
            }
        } finally {
            setIsLoading(false)
        }
    }

    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, text: '', color: '' }
        
        let strength = 0
        if (password.length >= 8) strength += 1
        if (/[a-z]/.test(password)) strength += 1
        if (/[A-Z]/.test(password)) strength += 1
        if (/\d/.test(password)) strength += 1
        if (/[^a-zA-Z\d]/.test(password)) strength += 1

        const strengthMap = {
            0: { text: 'Very Weak', color: 'bg-red-500' },
            1: { text: 'Weak', color: 'bg-red-400' },
            2: { text: 'Fair', color: 'bg-yellow-500' },
            3: { text: 'Good', color: 'bg-blue-500' },
            4: { text: 'Strong', color: 'bg-green-500' },
            5: { text: 'Very Strong', color: 'bg-green-600' }
        }

        return { strength, ...strengthMap[strength] }
    }

    const passwordStrength = getPasswordStrength(formData.password)

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-md w-full space-y-8 relative z-10">
                {/* Header */}
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Join StackIt Today!
                    </h2>
                    <p className="text-slate-400">
                        Create your account and start asking questions or sharing knowledge
                    </p>
                </div>

                {/* Form */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                                    First Name *
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.firstName 
                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                                            : 'border-slate-600/50 focus:ring-purple-500/50 focus:border-purple-500/50'
                                    }`}
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.lastName 
                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                                            : 'border-slate-600/50 focus:ring-purple-500/50 focus:border-purple-500/50'
                                    }`}
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                            </div>
                        </div>

                        {/* Email field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.email 
                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                                            : 'border-slate-600/50 focus:ring-purple-500/50 focus:border-purple-500/50'
                                    }`}
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Password field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                                Password *
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.password 
                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                                            : 'border-slate-600/50 focus:ring-purple-500/50 focus:border-purple-500/50'
                                    }`}
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5 text-slate-400 hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-slate-400 hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {/* Password Strength Indicator */}
                            {formData.password && (
                                <div className="mt-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex-1 bg-slate-600 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                                                style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className={`text-xs font-medium ${passwordStrength.color.replace('bg-', 'text-')}`}>
                                            {passwordStrength.text}
                                        </span>
                                    </div>
                                </div>
                            )}
                            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Confirm Password field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                                Confirm Password *
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.confirmPassword 
                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                                            : 'border-slate-600/50 focus:ring-purple-500/50 focus:border-purple-500/50'
                                    }`}
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-5 h-5 text-slate-400 hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-slate-400 hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <input
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-600 rounded bg-slate-700"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="agreeToTerms" className="ml-3 text-sm text-slate-300">
                                    I agree to the{' '}
                                    <button 
                                        type="button"
                                        onClick={() => navigate('/terms-of-service')}
                                        className="text-purple-400 hover:text-purple-300 underline"
                                    >
                                        Terms of Service
                                    </button>
                                    {' '}and{' '}
                                    <button 
                                        type="button"
                                        onClick={() => navigate('/privacy-policy')}
                                        className="text-purple-400 hover:text-purple-300 underline"
                                    >
                                        Privacy Policy
                                    </button>
                                    <span className="text-red-400 ml-1">*</span>
                                </label>
                            </div>
                            {errors.agreeToTerms && <p className="text-red-400 text-xs">{errors.agreeToTerms}</p>}

                            <div className="flex items-start">
                                <input
                                    id="subscribeNewsletter"
                                    name="subscribeNewsletter"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-600 rounded bg-slate-700"
                                    checked={formData.subscribeNewsletter}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="subscribeNewsletter" className="ml-3 text-sm text-slate-300">
                                    Subscribe to our newsletter for updates and programming tips
                                    <span className="text-slate-500 block text-xs mt-1">Optional - You can unsubscribe at any time</span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </div>
                            ) : (
                                'Create Account'
                            )}
                        </button>

                        {/* Login Link */}
                        <div className="text-center">
                            <span className="text-sm text-slate-400">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => navigate('/login')}
                                    className="text-purple-400 hover:text-purple-300 underline font-medium transition-colors duration-200"
                                >
                                    Sign In
                                </button>
                            </span>
                        </div>

                        {/* Social Registration Options */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-slate-800 text-slate-400">Or register with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-slate-600 rounded-lg shadow-sm bg-slate-700/50 text-sm font-medium text-slate-300 hover:bg-slate-600/50 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    <span className="ml-2">Google</span>
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-slate-600 rounded-lg shadow-sm bg-slate-700/50 text-sm font-medium text-slate-300 hover:bg-slate-600/50 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span className="ml-2">Facebook</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Back to Home */}
                <div className="text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-slate-400 hover:text-slate-300 text-sm flex items-center justify-center gap-2 mx-auto transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to StackIt
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register