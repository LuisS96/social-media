// Libraries
import Link from 'next/link';

// Authentication
import { auth } from '@/app/auth';

// Components
import { Icon } from '@/components/Icon/Icon';

// Utils
import { routes } from '@/utils/routes';

export const Sidebar = async () => {
  const user = await auth();

  return (
    <aside className='max-w-[240px] w-full h-fit sticky top-0 left-0 bg-white rounded-lg shadow flex flex-col gap-6 p-4'>
      {routes.map(({ path, name, icon }) => (
        <Link
          key={name}
          href={path === '/profile' ? `/profile/${user?.id}` : path}
          className='flex flex-row items-center capitalize gap-3 text-slate-500 hover:text-slate-700'
        >
          <Icon name={icon} variant='light' />
          {name}
        </Link>
      ))}
    </aside>
  );
};
