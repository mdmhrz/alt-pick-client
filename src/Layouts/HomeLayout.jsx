import React from 'react';
import Banner from '../components/Banner/Banner';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import RecentQuery from '../components/RecentQuery/RecentQuery';

const HomeLayout = () => {

    const queriesPromise = fetch('https://career-code-server-eight-xi.vercel.app/jobs').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <RecentQuery></RecentQuery>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default HomeLayout;