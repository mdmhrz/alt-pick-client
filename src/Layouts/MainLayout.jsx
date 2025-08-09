import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    const navigation = useNavigate();
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <header className='relative mb-[64px] md:mb-[68px] '>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-64px)]'>
                {navigation.state === 'loading' ? <Loading /> : <Outlet />}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;