export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profilePicture: string;
  dateOfBirth: string;
  phone: string;
  bio: string;
  posts: number;
  followers: number;
  following: number;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  attachments: string | null;
  tags: string[];
  likes: number;
  likedBy: string[];
  comments: number;
  reposts: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  mentions: string[];
  likes: number;
  replies: Reply[];
  createdAt: string;
  updatedAt: string;
}

export interface Reply {
  id: string;
  author: string;
  content: string;
  mentions: string[];
  likes: number;
  createdAt: string;
  updatedAt: string;
}
