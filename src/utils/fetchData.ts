// Mock Data
import { mockAuthUser, mockPosts, mockUsers } from './mockData';

// Types
import { User, Post } from './mockData.types';

const delay = 750;

export const fetchUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockAuthUser);
    }, delay);
  });
};

export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, delay);
  });
};

export const fetchPosts = (): Promise<Post[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockPosts);
    }, delay);
  });
};

export const fetchUserPosts = (userId: string): Promise<Post[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockPosts.filter((mockPost) => mockPost.author.id === userId));
    }, delay);
  });
};

export const fetchUserById = (userId: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = mockUsers.find((mockUser) => mockUser.id === userId);
      if (foundUser) resolve(foundUser);
      else reject(new Error(`User with id ${userId} not found`));
    }, delay);
  });
};
