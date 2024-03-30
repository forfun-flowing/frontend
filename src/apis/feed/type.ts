export type Contents = {
  profilePic: string;
  nickname: string;
  age: number;
  region: string;
  content: string;
  channel: {
    id: number;
    name: string;
    title: string;
    subTitle: string;
  };
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updateAt: string;
};

export type FeedResponse = {
  id: number;
  contents: Contents;
  images: string[];
};
