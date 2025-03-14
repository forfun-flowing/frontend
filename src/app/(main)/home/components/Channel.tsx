import Link from 'next/link';

import RightArrowIcon from '@/assets/RightArrow';
import Video from '@/components/Video';

type Channel = {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  video: string;
};

type ChannelProps = {
  channelData: Channel;
};

export default function Channel({ channelData }: ChannelProps) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
      <Video src={channelData.video} className="absolute" />
      <div className="absolute flex size-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-b from-black/40 to-transparent">
        <div className="flex flex-col gap-3 px-6 pt-6">
          <p className="z-10 text-xs text-white">{channelData.name}</p>
          <h2 className="whitespace-pre-wrap text-xl font-bold text-white">{channelData.title}</h2>
          <p className="text-xs text-gray-300">{channelData.subTitle}</p>
        </div>
        <Link href={`/feed?channelId=${channelData.id}`} className="backdrop-blur-[120px]">
          <div className="h-12 w-full">
            <div className="flex size-full items-center justify-end gap-2 px-5">
              <p className="text-xs text-white">자세히 보기</p>
              <div className="flex size-5 items-center justify-center rounded-full bg-white">
                <RightArrowIcon width={12} height={12} className="text-black" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
