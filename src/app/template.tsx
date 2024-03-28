// Libraries
import { ReactNode } from 'react';

// Sidebar
import { Sidebar } from '@/components/Sidebar/Sidebar';

export default async function Template({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-screen min-h-svh h-full bg-slate-50 w-full flex flex-row justify-center gap-2 p-4'>
      <Sidebar />
      {children}
    </main>
  );
}
