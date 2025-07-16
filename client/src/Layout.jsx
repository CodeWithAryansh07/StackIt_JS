import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

const Layout = () => {

    const location = useLocation();

    let showNavbarAndFooter = true;

    if (location.pathname === '/login' || location.pathname === '/register') {
        showNavbarAndFooter = false;
    }

    return (
        <>
            <ScrollToTop />
            {showNavbarAndFooter && <Navbar />}
            <Outlet />
            {showNavbarAndFooter && <Footer />}
        </>
    )
}

export default Layout