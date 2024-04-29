import http from '../config/instance';

export const ChannelApi = {
  getChannels: async () => {
    return await http.get<ChannelType[]>('/channels');
  },
};
