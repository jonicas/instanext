export interface User {
  name: string;
  username: string;
  description: string;
  counters: {
    posts: number;
    followers: number;
    following: number;
  };
}
