import { useFeedFormContext } from '@/providers/FeedFormProvider';

export default function TextArea() {
  const { register } = useFeedFormContext();
  return (
    <>
      <textarea
        className="h-full w-full text-sm leading-[19.6px] placeholder:text-gray-400 focus:outline-none"
        {...register('content', {
          required: true,
        })}
        placeholder="나누고 싶은 이야기 공유해 보세요."
      />
    </>
  );
}
