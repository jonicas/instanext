import { Feed } from "./components/feed";
import { Stories } from "./components/stories";

export default function Home() {
  return (
    <div className="flex flex-col items-center" data-testid="home-page">
      <div>
        <Stories />
      </div>
      <div className="w-full max-w-[470px]">
        <Feed view="list" posts={[]} />
      </div>
    </div>
  );
}
