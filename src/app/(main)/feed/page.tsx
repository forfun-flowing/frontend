'use client';

import { useGetFeed } from '@/apis/feed';
import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import FeedItem from './components/FeedItem';

export default function Feed() {
  const { data: feed } = useGetFeed();

  return (
    <div>
      <Header>
        <Header.FeedHeader>피드</Header.FeedHeader>
      </Header>
      <ul>
        {feed?.map(({ id, contents }) => (
          <li key={id}>
            <FeedItem contents={contents} />
          </li>
        ))}
      </ul>
      <BottomTabBar />
    </div>
  );
}
