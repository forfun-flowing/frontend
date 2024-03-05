'use client';

import DownArrowIcon from '@/assets/DownArrow';
import useOverlay from '@/hooks/useOverlay';
import BodyTypeBottomSheet from './BodyTypeBottomSheet';
import { type Join1ContextValue } from '../../../components/Join1Context';
import { type UseFormReturn, useWatch } from 'react-hook-form';

type BodyTypeDropBoxProps = {
  useForm: UseFormReturn<Join1ContextValue>;
};

export default function BodyTypeDropBox({ useForm }: BodyTypeDropBoxProps) {
  const { control } = useForm;
  const bodyType = useWatch({
    control,
    name: 'bodyType',
  });

  const { open } = useOverlay();

  const handleClickButton = () => {
    open(({ isOpen, close }) => (
      <BodyTypeBottomSheet useForm={useForm} onClose={close} isOpen={isOpen} />
    ));
  };

  return (
    <button
      onClick={handleClickButton}
      className="flex h-[52px] w-32 items-center justify-evenly rounded-lg border border-gray-100 text-sm dark:border-gray-800"
    >
      {bodyType ?? '체형 선택'}
      <DownArrowIcon />
    </button>
  );
}