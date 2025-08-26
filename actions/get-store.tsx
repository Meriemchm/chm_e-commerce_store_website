import {Store} from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_STORE}`;
export const getStore = async (): Promise<Store> => {
  const res = await fetch(`${URL}`);
  if (!res.ok) {
    throw new Error('Failed to fetch store');
  }
  return res.json();
};  