import Image from "next/image";
export default function Profile() {
  return (
    <div className="grid min-h-screen grid-cols-12 justify-center bg-white text-white dark:bg-black">
      <header className="col-span-12 flex">
        <div>
          <Image
            src="/profile.jpg"
            alt="User profile pic"
            width="400"
            height={400}
          ></Image>
        </div>
        <section className="flex flex-col gap-5">
          <h1>jonysilva</h1>
          <div className="flex gap-5">
            <span>28 posts</span>
            <span>323 followers</span>
            <span>533 following</span>
          </div>
        </section>
      </header>
      <div className="col-span-12 flex min-h-screen flex-col items-center justify-between">
        gallery
      </div>
    </div>
  );
}
