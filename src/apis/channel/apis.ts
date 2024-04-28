import http from '../config/instance';

export const ChannelApi = {
  getChannels: async (query: string) => {
    return await http.get<ChannelType[]>(`/channels${query}`);
  },
};
