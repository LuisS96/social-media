import { fetchUser } from '@/utils/fetchData';

export const { auth } = {
  auth: () => fetchUser(),
};
