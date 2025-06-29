import React from 'react';
import Banner from '../components/Banner/Banner';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import RecentQuery from '../components/RecentQuery/RecentQuery';
import { Suspense } from 'react';
import Loading from '../components/Loading/Loading';
import JoinCommunityCTA from '../components/JoinCommunityCTA/JoinCommunityCTA';
import { Helmet } from 'react-helmet-async';

const HomeLayout = () => {

    const queryPromise = fetch('https://alt-pick-server.vercel.app/queries/latest').then(res => res.json())
    return (

        <>
            <Helmet>
                <title>Home | AltPick</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Suspense fallback={<Loading></Loading>}>
                    <RecentQuery queryPromise={queryPromise}></RecentQuery>
                </Suspense>
                <WhyChooseUs></WhyChooseUs>
                <JoinCommunityCTA></JoinCommunityCTA>
            </div>
        </>
    );
};

export default HomeLayout;