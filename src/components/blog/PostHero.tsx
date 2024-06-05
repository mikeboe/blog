import { Headline1 } from "@/components/ui/Typography";

type PostHeroProps = {
  meta: {
    draft: boolean;
    title: string;
    snippet: string;
    category: string;
    publishDate: Date;
    image: {
      src: string;
      alt: string;
    };
    tags: string[];
    author: {
      name: string;
    };
  };
};

export default function PostHero({ meta }: PostHeroProps) {
  console.log(meta);
  const { title, publishDate, image, tags, author } = meta;

  const date = publishDate.toString().split("T")[0];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mx-auto max-w-3xl mt-14">
        <Headline1>{title}</Headline1>
        <div className="flex gap-2 mt-8 items-center justify-center text-sm flex-wrap md:flex-nowrap">
          <span className="text-slate-400"> {author.name} </span>
          <span className="text-slate-400">•</span>
          <time className="text-slate-400" dateTime={date}>
            {" "}
            {date}{" "}
          </time>
        </div>
        <div className="flex gap-2 mt-2 items-center justify-center text-sm flex-wrap md:flex-nowrap">

          <div className="w-full md:w-auto flex flex-wrap justify-center gap-3">
            <div className="flex flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="dark:bg-gray-900 dark:text-gray-400 dark:border-gray-400 inline-flex items-center m-1 gap-x-0.5 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset dark:ring-gray-500/50 ring-gray-500/10"
                >
                  {"#" + tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl">
        <img
          src={image.src}
          className="h-full w-full object-contain rounded-xl mt-6"
        />
      </div>
    </div>
  );
}
