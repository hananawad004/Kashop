import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
