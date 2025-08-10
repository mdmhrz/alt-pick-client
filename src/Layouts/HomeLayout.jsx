import React from 'react';
import Banner from '../components/Banner/Banner';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import RecentQuery from '../components/RecentQuery/RecentQuery';
import { Suspense } from 'react';
import Loading from '../components/Loading/Loading';
import JoinCommunityCTA from '../components/JoinCommunityCTA/JoinCommunityCTA';
import { Helmet } from 'react-helmet-async';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import MobileAppPromotion from '../components/MobileAppPromotion/MobileAppPromotion';
import RecentActivityFeed from '../components/RecentActivityFeed/RecentActivityFeed';

const HomeLayout = () => {

    const queryPromise = fetch('https://alt-pick-server.vercel.app/queries/latest').then(res => res.json());
    const activitiesPromise = fetch('https://alt-pick-server.vercel.app/recommendations/recent').then(res => res.json());
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
                <Suspense fallback={<Loading></Loading>}>
                    <RecentActivityFeed activitiesPromise={activitiesPromise}></RecentActivityFeed>
                </Suspense>
                <HowItWorks></HowItWorks>
                <WhyChooseUs></WhyChooseUs>
                <JoinCommunityCTA></JoinCommunityCTA>
                <MobileAppPromotion></MobileAppPromotion>
            </div>
        </>
    );
};

export default HomeLayout;