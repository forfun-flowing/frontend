import CreateImageIcon from '@public/svg/create-image.svg';

import { useFeedFormContext } from '@/providers/FeedFormProvider';

export default function ImageInput() {
  const { register } = useFeedFormContext();

  return (
    <>
      <div className="flex items-center gap-3">
        <label htmlFor="imageUpload" className="cursor-pointer">
          <CreateImageIcon />
        </label>
        <p className="text-sm text-gray-400">이미지 추가</p>
      </div>
      <input
        className="hidden"
        type="file"
        id="imageUpload"
        accept="image/*"
        multiple
        {...register('feedImageIds')}
      />
    </>
  );
}
