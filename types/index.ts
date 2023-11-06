export interface User {
  id: string;
  name: string;
  username: string;
  image?: string;
}

export interface TweetType {
  id: string;
  createdAt: string;
  user: User;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
}
