import { BackButton, Header } from '@/components/Header';

export default function FeedCreateHeader() {
  return (
    <Header>
      <Header.Left>
        <BackButton />
      </Header.Left>
      <Header.Center>피드 작성</Header.Center>
      <Header.Right>
        <button type="submit">
          <p className="text-sm font-bold">작성 완료</p>
        </button>
      </Header.Right>
    </Header>
  );
}
