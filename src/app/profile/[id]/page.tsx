// Libraries
import { Suspense } from 'react';

// Authentication
import { auth } from '@/app/auth';

// Components
import { Post } from '@/components/Post/Post';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { CreatePost } from '@/components/CreatePost/CreatePost';

// Utils
import { fetchUserById, fetchUserPosts } from '@/utils/fetchData';

export default async function Profile({
  params: { id },
}: {
  params: { id: string };
}) {
  const authUser = await auth();
  const user = await fetchUserById(id);
  const userPosts = await fetchUserPosts(id);

  return (
    <section className='flex flex-col gap-4 px-2 max-w-[600px] w-full'>
      <Suspense fallback={<p>Loading...</p>}>
        <ProfileCard user={user} />
        <CreatePost user={authUser} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        {userPosts.map((post) => (
          <Post key={post.id} user={user} {...post} />
        ))}
      </Suspense>
    </section>
  );
}
