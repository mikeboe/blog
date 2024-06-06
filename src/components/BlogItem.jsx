import React from 'react';

export default function BlogItem({
  id,
  image,
  slug,
  datetime,
  tags,
  date,
  category,
  title,
  description,
}) {
  return (
    <>
      <article key={id} className="flex flex-col items-start justify-between">
        <a href={'/blog/' + slug}>
          <div className="relative w-full">
            <img src={image.url} alt={image.alt} className="rounded-2xl" />
            {/*<GatsbyImage
              image={getImage(image)}
              alt={title}
              className="rounded-2xl"
            />*/}

            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </a>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center text-xs">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="dark:bg-gray-900 dark:text-green-700 dark:border-green-700 inline-flex items-center mr-1 gap-x-0.5 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset dark:ring-gray-500/50 ring-gray-500/10"
              >
                {'#' + tag.name}
              </span>
            ))}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
              <a href={'/blog/' + slug}>
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={""} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                  {post.author.name} 
                      </a> 
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div> */}
        </div>
      </article>
    </>
  );
};
