import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

type FeedViewType = "grid" | "list";

export interface FeedProps {
  posts: Array<number>;
  view: "grid" | "list";
}

export interface FeedSkeletonProps {
  view: FeedViewType;
}

export const FeedSkeleton = ({ view }: FeedSkeletonProps) => {
  return (
    <div
      className={`grid gap-2 p-0 md:p-0 ${
        view === "grid" ? "grid-cols-3" : "grid-cols-1"
      }`}
    >
      {Array.from(new Array(9)).map((n, i) => (
        <Skeleton key={i} className="aspect-square w-full" />
      ))}
    </div>
  );
};

export const Feed = ({ view }: FeedProps) => {
  return (
    <div
      className={`grid gap-2 p-0 md:p-0 ${
        view === "grid" ? "grid-cols-3" : "grid-cols-1"
      }`}
    >
      {Array.from(new Array(15)).map((n, i) => (
        <Link
          key={i}
          href="#"
          className="aspect-square w-full bg-orange-300"
        ></Link>
      ))}
    </div>
  );
};
