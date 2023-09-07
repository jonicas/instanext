import { Feed } from "../components/feed";

export default function Explore() {
  return (
    <div className="w-full max-w-[965px] pt-5">
      <Feed view="grid" posts={[]} />
    </div>
  );
}
