import Image from 'next/image';

import type { CrushResponse } from '@/apis/crush/type';
import { S3_BASE_URL } from '@/constants';
import { calculateAge } from '@/utils';

export default function CrushPointCard(props: CrushResponse) {
  const { crushId, profileImagePaths, new: isNew, crushScore, selfIntro } = props;
  return (
    <>
      <li
        key={crushId}
        className="relative flex aspect-[3/4] flex-1 items-end overflow-hidden rounded-xl bg-gray-200 p-4"
      >
        <Image
          src={`${S3_BASE_URL}/${profileImagePaths[0]}`}
          fill={true}
          alt="profile"
          className="absolute object-cover"
        />
        {isNew && (
          <div className="absolute right-4 top-4 z-[2] flex h-5 w-6 items-center justify-center rounded-xl bg-primary-300 text-xs font-bold text-white">
            N
          </div>
        )}
        <div className="z-10 flex flex-col gap-y-2 text-white">
          <div className="flex gap-x-1 text-xs font-bold">
            <span>★</span>
            <span>{Number(crushScore).toFixed(1)}</span>
          </div>
          <p className="font-bold">
            {selfIntro.nickname}. {calculateAge(selfIntro.birth)}
          </p>
          <p>{}</p>
        </div>
      </li>
    </>
  );
}
