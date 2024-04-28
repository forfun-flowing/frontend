export type FeedContentsType = {
  memberId: string;
  profilePic: string;
  nickname: string;
  age: number;
  region: string;
  gender: boolean;
  content: string;
  channel: ChannelType;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updateAt: string;
};

export type FeedResponse = {
  id: number;
  contents: FeedContentsType;
  images: string[];
};
