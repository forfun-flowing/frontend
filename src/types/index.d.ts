type PropsWithStrictChildren<P = unknown, T extends React.ReactNode = ReactNode> = P & {
  children: T;
};

type CommonResponse<T = any> = {
  code: string;
  message: string;
  data: T;
};

type OverlayProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

type Payload = {
  authority: string;
  exp: number;
  id: string;
};

type FileValue = {
  files: {
    uuid: string;
    path: string;
  }[];
};

type GenderType = 'MALE' | 'FEMALE';

type ChannelType = {
  id: number;
  name: '연애 이야기' | '데일리' | '취미 활동' | '고민상담' | '셀프 소개팅' | '반려동물';
  title: string;
  subTitle: string;
};
