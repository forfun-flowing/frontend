import { useWatch } from 'react-hook-form';

import { useFeedFormContext } from '@/providers/FeedFormProvider';
import { cn } from '@/utils';

type ItemType = {
  id: number;
  name: ChannelType['name'];
};

type ChipProps = {
  items: ItemType[];
};

export default function ChannelSelect({ items }: ChipProps) {
  const { control, setValue } = useFeedFormContext();
  const channel = useWatch({ control, name: 'channel' });

  return (
    <ul className="flex cursor-pointer flex-nowrap gap-1 overflow-x-auto">
      {items.map(({ id, name }) => (
        <li
          key={id}
          className={cn(
            `flex h-9 w-fit items-center justify-center whitespace-nowrap rounded-[28px] border border-gray-200 px-3 text-xs`,
            { 'bg-gray-900 text-white': channel === id },
          )}
          onClick={() => setValue('channel', id)}
        >
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
