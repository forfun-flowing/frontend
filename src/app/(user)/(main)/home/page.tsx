import { Suspense } from 'react';

import BottomTabBar from '@/components/TabBar/BottomTabBar';
import Spacing from '@/components/layout/Spacing';

import Banner from './components/Banner';
import HomeHeader from './components/HomeHeader';
import InterestChannelSection from './components/InterestChannelSection';
import RecommendationProfileSection from './components/RecommendationProfileSection';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="px-5">
        <Suspense>
          <RecommendationProfileSection />
        </Suspense>
        <Banner />
        <InterestChannelSection />
        <Spacing size={32} />
      </div>
      <BottomTabBar />
    </>
  );
}
