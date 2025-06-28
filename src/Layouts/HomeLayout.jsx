import React from 'react';
import Banner from '../components/Banner/Banner';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import RecentQuery from '../components/RecentQuery/RecentQuery';
import { Suspense } from 'react';
import Loading from '../components/Loading/Loading';
import JoinCommunityCTA from '../components/JoinCommunityCTA/JoinCommunityCTA';

const HomeLayout = () => {

    const queryPromise = fetch('http://localhost:3000/queries/latest').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <RecentQuery queryPromise={queryPromise}></RecentQuery>
            </Suspense>
            <WhyChooseUs></WhyChooseUs>
            <JoinCommunityCTA></JoinCommunityCTA>
        </div>
    );
};

export default HomeLayout;