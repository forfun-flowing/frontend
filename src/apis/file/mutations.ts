import { useMutation } from '@tanstack/react-query';

import { fileApi } from './api';
import { FileRequest } from './type';

export const usePostFile = () =>
  useMutation({
    mutationFn: ({ file, objectType }: FileRequest) => fileApi.postFile(file, objectType),
  });
