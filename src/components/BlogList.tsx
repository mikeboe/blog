import React, { useState } from "react";

type BlogListProps = {
  articles: {
    slug: string;
    data: {
      title: string;
      snippet: string;
      tags: string[];
      image: {
        src: string;
        alt?: string;
      }; 
    };
  }[];
};

const BlogList = ({ articles }: BlogListProps) => {
  const [filteredList, setFilteredList] = useState(articles);

  let tags: string[] = [];

  const addTag = (tag: string) => {
    if (tags.includes(tag)) {
      return;
    }
    tags.push(tag);
  };

  articles.map((article) => {
    article.data.tags.map((tag) => {
      addTag(tag);
    });
  });

  tags.sort();

  tags.unshift("All");

  const filterList = (tag: string) => {
    if (tag === "All") {
      setFilteredList(articles);
      return;
    }
    setFilteredList(
      articles.filter((article) => article.data.tags.includes(tag))
    );
  };

  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            {tags.map((tag, index) => (
              <button onClick={() => filterList(tag)}>
                <span
                  key={index}
                  className="dark:bg-gray-900 dark:text-green-700 dark:border-green-700 inline-flex items-center mr-1 gap-x-0.5 rounded-md bg-gray-50 px-2 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-gray-500/10 hover:bg-gray-100 hover:text-gray-700 hover:ring-gray-500/50 transition-colors"
                >
                  {"#" + tag}
                </span>
              </button>
            ))}
            <div className="mt-12 sm:mt-20">
              <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredList.map((article, index) => (
                  <>
                    <li
                      key={index}
                      className="group relative flex flex-col items-start"
                    >
                      <div className="relative w-full">
                        <div className="relative z-10 rounded-2xl">
                          <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl"
                            src={article.data.image.src}
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                      <div className="p-2">
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-100 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl dark:bg-zinc-800/50"></div>
                          <a href={"/blog/" + article.slug}>
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 rounded-2xl"></span>
                            <span className="relative z-10">
                              {article.data.title}
                            </span>
                          </a>
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {article.data.snippet}
                        </p>
                        <div className="relative flex flex-wrap mt-2 z-10">
                          {article.data.tags.map((tag, index) => (
                            <a href={"/blog/tags/" + tag}>
                              <span
                                key={index}
                                className="dark:bg-gray-900 z-20 text-gray-900 dark:text-gray-400 dark:border-gray-400 inline-flex items-center mr-1 my-1 gap-x-0.5 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset dark:ring-gray-500/50 ring-gray-500/10"
                              >
                                {"#" + tag}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
