'use client';

import { useEffect } from 'react';

import { useOverlay } from '@/hooks';

import CautionBottomSheet from './components/CautionBottomSheet';

export default function FeedCreatePage() {
  const { open } = useOverlay();

  useEffect(() => {
    open(({ isOpen, close }) => <CautionBottomSheet isOpen={isOpen} onClose={close} />);
  }, [open]);

  return (
    <>
      <p>피드 작성페이지다</p>
    </>
  );
}
