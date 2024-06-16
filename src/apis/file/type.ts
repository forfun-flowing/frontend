export type FileRequest = {
  file: File;
  objectType: 'profile' | 'feed';
};

export type FileResponse = {
  id: string;
  name: string;
  path: string;
};
