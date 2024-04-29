'use client';

import { useEffect } from 'react';

import { useGetChannels } from '@/apis/channel';
import { useOverlay } from '@/hooks';
import { FeedFormProvider } from '@/providers/FeedFormProvider';

import CautionBottomSheet from './components/CautionBottomSheet';
import ChannelSelect from './components/ChannelSelect';
import FeedCreateHeader from './components/FeedCreateHeader';
import ImageInput from './components/ImageInput';
import TextArea from './components/TextArea';

export default function FeedCreatePage() {
  const { open } = useOverlay();
  useEffect(() => {
    open(({ isOpen, close }) => <CautionBottomSheet isOpen={isOpen} onClose={close} />);
  }, [open]);

  const { data: channels } = useGetChannels();
  if (!channels) return;

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <FeedFormProvider onSubmit={handleSubmit}>
      <FeedCreateHeader />
      <div className="px-5">
        <ChannelSelect items={channels.map(({ id, name }) => ({ id, name }))} />
        <ImageInput />
        <TextArea />
      </div>
    </FeedFormProvider>
  );
}
