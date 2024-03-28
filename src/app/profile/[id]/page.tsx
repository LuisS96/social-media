// Libraries
import { Suspense } from 'react';

// Components
import { Post } from '@/components/Post/Post';

// Utils
import { fetchUserById, fetchUserPosts } from '@/utils/fetchData';

export default async function Profile({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await fetchUserById(id);
  const userPosts = await fetchUserPosts(id);

  return (
    <section className='flex flex-col gap-4 px-2 max-w-[600px] w-full'>
      <Suspense fallback={<p>Loading...</p>}>
        {userPosts.map((post) => (
          <Post key={post.id} user={user} {...post} />
        ))}
      </Suspense>
    </section>
  );
}
