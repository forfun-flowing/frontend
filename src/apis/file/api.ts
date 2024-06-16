import http from '../config/instance';
import { usePostFile } from './mutations';
import type { FileResponse } from './type';

export const fileApi = {
  postFile: async (file: File, objectType: 'profile' | 'feed') => {
    const form = new FormData();
    form.append('file', file);

    return await http.post<FileResponse>(`/files?object=${objectType}`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
