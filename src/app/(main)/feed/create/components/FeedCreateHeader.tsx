import { useWatch } from 'react-hook-form';

import { BackButton, Header } from '@/components/Header';
import { useFeedFormContext } from '@/providers/FeedFormProvider';

export default function FeedCreateHeader() {
  const { control } = useFeedFormContext();
  const content = useWatch({ control, name: 'content' });

  return (
    <Header>
      <Header.Left>
        <BackButton />
      </Header.Left>
      <Header.Center>피드 작성</Header.Center>
      <Header.Right>
        <button
          type="submit"
          className="text-sm font-bold text-primary-400 disabled:text-gray-400"
          disabled={!content}
        >
          작성 완료
        </button>
      </Header.Right>
    </Header>
  );
}
