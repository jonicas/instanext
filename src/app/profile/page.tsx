import React, { Suspense } from "react";

import { Feed, FeedSkeleton } from "../components/feed";

interface Post {
  title: string;
}

const loadPosts = async (): Promise<Array<Post>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([{ title: "test" }]), 7000);
  });
};

const AsyncFeed = async () => {
  const result = await loadPosts();

  return <Feed posts={[]} view="grid" />;
};

export default async function Profile() {
  return (
    <Suspense fallback={<FeedSkeleton view="grid"></FeedSkeleton>}>
      <AsyncFeed></AsyncFeed>
    </Suspense>
  );
}
