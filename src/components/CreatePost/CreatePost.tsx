'use client';

// Libraries
import { FC } from 'react';
import Image from 'next/image';

// Components
import { Card } from '@/components/Card/Card';
import { Icon } from '@/components/Icon/Icon';
import { ContentEditable } from '@/components/ContentEditable/ContentEditable';

// Utils
import { User } from '@/utils/mockData.types';

interface CreatePostProps {
  user: User | null;
}

export const CreatePost: FC<CreatePostProps> = ({ user }) => {
  return (
    <Card>
      <div className='w-full flex flex-row gap-2 items-start py-2 px-4'>
        {user?.profilePicture ? (
          <Image
            src={user?.profilePicture}
            alt={`${user.firstName} ${user.lastName} profile picture`}
            width={40}
            height={40}
            className='rounded-full'
          />
        ) : (
          <Icon name='circleUser' className='!w-10 !h-10' variant='solid' />
        )}
        <div className='py-2 w-full'>
          <ContentEditable
            placeholder={`What's new ${user?.firstName || ''}?!`}
          />
        </div>
      </div>
      <hr className='bg-slate-300' />
      <div className='w-full flex flex-row items-center justify-between py-2 px-4'>
        <div className='flex flex-row gap-3'>
          <Icon name='image' />
          <Icon name='gif' />
          <Icon name='listUl' />
          <Icon name='faceSmile' />
        </div>
      </div>
    </Card>
  );
};
