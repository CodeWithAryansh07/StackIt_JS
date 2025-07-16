import React from 'react'
import Questionnaire from './components/Questionnaire'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating Question Marks - Responsive positioning */}
        <div className="absolute top-20 left-4 sm:left-10 text-4xl sm:text-6xl text-blue-400/15 animate-pulse">?</div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-16 text-3xl sm:text-4xl text-purple-400/15 animate-bounce">?</div>
        <div className="absolute top-60 sm:top-80 left-8 sm:left-20 text-4xl sm:text-5xl text-pink-400/15 animate-pulse">?</div>
        <div className="absolute bottom-32 sm:bottom-40 right-16 sm:right-32 text-4xl sm:text-6xl text-blue-400/15 animate-float">?</div>
        <div className="absolute bottom-60 sm:bottom-80 left-8 sm:left-16 text-3xl sm:text-4xl text-purple-400/15 animate-pulse">?</div>

        {/* Geometric Shapes - Responsive sizes */}
        <div className="absolute top-20 sm:top-24 right-20 sm:right-40 w-8 h-8 sm:w-16 sm:h-16 border-2 border-blue-400/15 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-48 sm:top-60 left-16 sm:left-40 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-48 sm:bottom-60 right-8 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400/15 to-purple-400/15 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-80 sm:top-96 right-12 sm:right-24 w-10 h-10 sm:w-14 sm:h-14 border-2 border-purple-400/15 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-24 sm:bottom-32 left-16 sm:left-32 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-400/10 to-blue-400/10 transform rotate-45 animate-float"></div>

        {/* Abstract Lines - Responsive widths */}
        <div className="absolute top-28 sm:top-32 left-1/4 w-16 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 sm:bottom-40 right-1/4 w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -rotate-12 animate-float"></div>

        {/* More Question Marks for larger screens */}
        <div className="hidden md:block absolute top-1/2 left-4 lg:left-8 text-4xl lg:text-5xl text-green-400/15 animate-pulse">?</div>
        <div className="hidden md:block absolute top-1/3 right-4 lg:right-8 text-3xl lg:text-4xl text-yellow-400/15 animate-bounce">?</div>
        <div className="hidden lg:block absolute bottom-1/3 left-1/2 text-6xl text-indigo-400/15 animate-float">?</div>

        {/* Additional Geometric Elements */}
        <div className="hidden lg:block absolute top-1/4 left-1/3 w-6 h-6 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full animate-pulse"></div>
        <div className="hidden xl:block absolute bottom-1/4 right-1/3 w-12 h-12 border border-emerald-400/15 rotate-45 animate-spin-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Hero />
          <Questionnaire />
        </div>
      </div>
    </div >
  )
}

export default App