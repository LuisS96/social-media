// Libraries
import { FC } from 'react';
import Image from 'next/image';

// Components
import { Icon } from '@/components/Icon/Icon';

// Utils
import { User } from '@/utils/mockData.types';

interface ProfileCardProps {
  user: User | null;
}

export const ProfileCard: FC<ProfileCardProps> = async ({ user }) => {
  return (
    <div className='bg-white w-full flex flex-col shadow rounded-lg'>
      <div className='w-full bg-slate-700 h-36 rounded-t-lg' />
      <div className='flex flex-col relative w-full bg-transparent roudned-t-lg gap-4 p-4 pt-14'>
        <div className='absolute top-0 -translate-y-1/2 left-4 bg-white border-2 border-slate-300 rounded-full'>
          {user?.profilePicture ? (
            <Image
              src={user.profilePicture}
              alt={''}
              width={80}
              height={80}
              className='rounded-full'
            />
          ) : (
            <Icon
              name='circleUser'
              className='!w-20 !h-20 text-slate-700'
              variant='solid'
            />
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-semibold text-2xl leading-none text-slate-700'>{`${user?.firstName} ${user?.lastName}`}</span>
          <span>{`@${user?.username}`}</span>
          <span>{user?.bio}</span>
        </div>
        <div className='absolute flex flex-col items-end gap-2 top-4 right-4'>
          <div className='flex flex-row gap-4'>
            <span className='inline-flex gap-1'>
              <span className='text-slate-700 font-semibold'>
                {user?.posts}
              </span>
              posts
            </span>
            <span className='inline-flex gap-1'>
              <span className='text-slate-700 font-semibold'>
                {user?.followers}
              </span>
              followers
            </span>
            <span className='inline-flex gap-1'>
              <span className='text-slate-700 font-semibold'>
                {user?.following}
              </span>
              following
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
