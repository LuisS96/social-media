// Libraries
import { FC, ReactNode } from 'react';

export const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='bg-white w-full flex flex-col gap-2 p-4 shadow rounded-lg'>
      {children}
    </div>
  );
};
