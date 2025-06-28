import React from 'react';
import Banner from '../components/Banner/Banner';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

const HomeLayout = () => {

    const queriesPromise = fetch('https://career-code-server-eight-xi.vercel.app/jobs').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default HomeLayout;