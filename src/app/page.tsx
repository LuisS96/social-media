// Libraries
import { Suspense } from 'react';

// Authentication
import { auth } from './auth';

// Components
import { Post } from '@/components/Post/Post';

// Utils
import { fetchPosts } from '@/utils/fetchData';

export default async function Home() {
  const user = await auth();
  const posts = await fetchPosts();

  return (
    <section className='flex flex-col gap-4 px-2 max-w-[600px] w-full'>
      <Suspense fallback={<p>Loading...</p>}>
        {posts.map((post) => (
          <Post key={post.id} user={user} {...post} />
        ))}
      </Suspense>
    </section>
  );
}
