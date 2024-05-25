import { useGetChannels } from '@/apis/channel';

import ChannelSelect from './ChannelSelect';
import ContentInput from './ContentInput';
import ImageInput from './ImageInput';

export default function FeedCreateForm() {
  const { data: channels } = useGetChannels();
  if (!channels) return;

  return (
    <div className="px-5">
      <ChannelSelect items={channels.map(({ id, name }) => ({ id, name }))} />
      <ImageInput />
      <ContentInput />
    </div>
  );
}
