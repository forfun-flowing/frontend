import { useQuery } from '@tanstack/react-query';

import { authApi } from '.';
import { queryKeys } from './keys';

export const useGetLogin = (code: string, provider: string, redirectUri: string) => {
  return useQuery({
    queryKey: queryKeys.getLogin(code),
    queryFn: () => authApi.getLogin(code, provider, redirectUri),
  });
};
