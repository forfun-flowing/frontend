import BombIcon from '@public/svg/CautionBottomSheet/bomb.svg';
import CautionIcon from '@public/svg/CautionBottomSheet/caution.svg';
import CurseIcon from '@public/svg/CautionBottomSheet/curse.svg';

import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/Spacing';

type CautionBottomSheet = {
  isOpen: boolean;
  onClose: VoidFunction;
};

const CAUTION_LIST = [
  { icon: <CurseIcon />, message: '욕설, 비방 등 상대방을 불쾌하게 하는 이야기' },
  { icon: <BombIcon />, message: '주제와 다른 관련 없는 글이나 광고' },
  { icon: <CautionIcon />, message: '잘못된 정보가 포함된 이야기' },
];

export default function CautionBottomSheet({ isOpen, onClose }: CautionBottomSheet) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <Spacing size={26} />
      <p className="text-xl font-bold">이런 내용은 피해주세요</p>
      <Spacing size={34} />
      <div className="flex flex-col gap-6">
        {CAUTION_LIST.map(({ icon, message }, index) => (
          <div key={index} className="flex gap-2">
            {icon}
            <p>{message}</p>
          </div>
        ))}
      </div>
      <Spacing size={60} />
      <ButtonWrapper>
        <Button onClick={() => onClose()}>확인했어요</Button>
      </ButtonWrapper>
    </BottomSheet>
  );
}
