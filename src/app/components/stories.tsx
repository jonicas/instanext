import Link from "next/link";
export interface StoriesProps {}

export const Stories = (props: StoriesProps) => {
  return (
    <div className="flex w-full max-w-full justify-start gap-16 overflow-auto p-1 px-[48px] md:h-[130px]">
      {Array.from(new Array(6)).map((n, i) => (
        <Link
          key={i}
          href="#"
          className="flex flex-col content-between items-center gap-1"
        >
          <div className="h-[77px] w-[77px] rounded-full bg-slate-400"></div>
          <span>Berlim</span>
        </Link>
      ))}
    </div>
  );
};
