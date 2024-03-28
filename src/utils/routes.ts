// Components
import { icons } from '@/components/Icon/Icon';

export const routes = [
  {
    path: '/',
    name: 'home',
    icon: icons.home,
  },
  {
    path: '/messages',
    name: 'messages',
    icon: icons.commentDots,
  },
  {
    path: '/friends',
    name: 'friends',
    icon: icons.users,
  },
  {
    path: '/events',
    name: 'events',
    icon: icons.calendarStar,
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    icon: icons.bookmark,
  },
  {
    path: '/profile',
    name: 'profile',
    icon: icons.user,
  },
];
