import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ValueResponse } from '@/apis/profile';
import { JobColor, LifeColor, LoveColor } from '@/assets/MyValue';
import Spacing from '@/components/layout/Spacing';

import { convertTypeToLabel } from '../../utils';

type ValueQnASectionProps = {
  valueResponses: ValueResponse[];
};

const ICON = {
  일: <JobColor />,
  사랑: <LoveColor />,
  인생: <LifeColor />,
};

export default function ValueQnASection({ valueResponses }: ValueQnASectionProps) {
  return (
    <>
      <div className="border-t border-gray-100 px-5 pt-8 dark:border-gray-800">
        <div className="text-lg font-bold">
          <span>가치관 </span>
          <span className="text-primary-400">Q&A</span>
        </div>
      </div>
      <Spacing size={16} />
      <div className="h-[219px] w-full">
        <Swiper className="size-full overflow-x-auto !px-5" spaceBetween={8}>
          {valueResponses.map(({ id, type, question, response }) => (
            <SwiperSlide key={id} className="size-full">
              <div className="size-full rounded-xl bg-gray-50 px-4 py-5 dark:bg-[rgba(66,66,69,0.5)]">
                <div className="flex items-center gap-x-[6px]">
                  {ICON[type]}
                  <span>{convertTypeToLabel(type)}</span>
                </div>
                <Spacing size={20} />
                <div className="flex gap-x-1 font-bold">
                  <span className="text-primary-400">Q.</span>
                  <span>{question}</span>
                </div>
                <Spacing size={16} />
                <div className="flex gap-x-1 border-t border-gray-200 py-4 text-gray-700 dark:border-gray-800 dark:text-gray-400">
                  <span>A.</span>
                  <span>{response}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Spacing size={32} />
    </>
  );
}
