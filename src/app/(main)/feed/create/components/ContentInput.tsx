import { useFeedFormContext } from '@/providers/FeedFormProvider';

export default function ContentInput() {
  const { register } = useFeedFormContext();

  return (
    <>
      <textarea
        className="size-full resize-none border-t border-gray-200 pt-[21px] text-sm leading-[19.6px] tracking-[0.2%] placeholder:text-gray-400 focus:outline-none"
        {...register('content', {
          required: true,
        })}
        placeholder="나누고 싶은 이야기 공유해 보세요."
      />
    </>
  );
}
