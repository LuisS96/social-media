'use client';

// Libraries
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Components
import { Card } from '@/components/Card/Card';
import { Icon } from '@/components/Icon/Icon';
import { ContentEditable } from '../ContentEditable/ContentEditable';

// Utils
import { Post as TPost, User } from '@/utils/mockData.types';

interface PostProps extends TPost {
  user: User | null;
}

export const Post: FC<PostProps> = ({
  user,
  author,
  content,
  attachments,
  likes,
  likedBy,
  reposts,
  comments,
  updatedAt,
}) => {
  const router = useRouter();
  const [comment, setComment] = useState<string>('');

  const handleLike = () => {};

  const handleProfilePicture = () => {
    router.push(`/profile/${author.id}`);
  };

  return (
    <Card>
      <div className='w-full flex flex-row items-center justify-between py-2 px-4'>
        <div
          className='flex flex-row gap-2 items-center cursor-pointer'
          onClick={handleProfilePicture}
        >
          {author.profilePicture ? (
            <Image
              src={author.profilePicture}
              alt={''}
              width={40}
              height={40}
              className='rounded-full'
            />
          ) : (
            <Icon name='circleUser' className='!w-10 !h-10' variant='solid' />
          )}
          <div className='flex flex-col gap-1'>
            <span className='text-slate-700 font-semibold'>{`${author.firstName} ${author.lastName}`}</span>
            <span className='text-slate-500 text-xs'>
              {new Date(updatedAt).toDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-between gap-2 py-2 px-4'>
        {content}
        {attachments && (
          <Image
            src={attachments}
            width={520}
            height={336}
            className='!w-full !h-fit rounded-md'
            alt=''
          />
        )}
      </div>
      <hr className='bg-slate-300' />
      <div className='flex flex-row justify-between px-4 py-2'>
        <div className='flex flex-row gap-2 text-slate-500 hover:text-blue-500 cursor-pointer'>
          <Icon name='commentDots' />
          {comments}
        </div>
        <div className='flex flex-row gap-2 text-slate-500 hover:text-blue-500 cursor-pointer'>
          <Icon name='reposts' />
          {reposts}
        </div>
        <div
          className={`flex flex-row gap-2 ${
            user && !likedBy.includes(user.id)
              ? 'text-slate-500'
              : 'text-blue-500'
          } hover:text-blue-500 cursor-pointer select-none`}
        >
          <Icon
            name='heart'
            variant={user && likedBy.includes(user.id) ? 'solid' : 'light'}
          />
          {likes}
        </div>
        <div className='flex flex-row gap-2 text-slate-500 hover:text-blue-500 cursor-pointer'>
          <Icon name='share' />
        </div>
      </div>
      <div className='flex flex-row gap-2 items-start py-2 px-4'>
        {user?.profilePicture ? (
          <Image
            src={user.profilePicture}
            alt={''}
            width={24}
            height={24}
            className='rounded-full'
          />
        ) : (
          <Icon name='circleUser' className='!w-1.5 !h-1.5' variant='solid' />
        )}
        <ContentEditable placeholder='Add a comment...' />
      </div>
    </Card>
  );
};
