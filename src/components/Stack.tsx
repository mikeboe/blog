import reactImage from "../assets/stack/react.png";
import postgresImage from "../assets/stack/postgres.png";
import nodejsImage from "../assets/stack/node-js.png";
import jsTsImage from "../assets/stack/js-ts.webp";
import tailwindImage from "../assets/stack/tailwind-css.png";
import viteImage from "../assets/stack/vite.jpeg";
import clickhouseImage from "../assets/stack/clickhouse.svg";
import expressImage from "../assets/stack/express.jpeg";
import githubActionsImage from "../assets/stack/gh-actions.png";

const Stack = () => {
  const stack = [
    { name: "React", icon: reactImage.src },
    { name: "Vite", icon: viteImage.src },
    { name: "Tailwind CSS", icon: tailwindImage.src },
    
    { name: "Node.js", icon: nodejsImage.src },
    { name: "JS / TS", icon: jsTsImage.src },
    { name: "Express", icon: expressImage.src },
    
    { name: "Postgres", icon: postgresImage.src },
    { name: "Clickhouse", icon: clickhouseImage.src },
    { name: "Docker", icon: "https://simpleicons.org/icons/docker.svg"},
    { name: "Kubernetes", icon: "https://simpleicons.org/icons/kubernetes.svg"},
    { name: "Github Actions", icon: githubActionsImage.src },

  ];
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h2 className="flex justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  <div className="flex">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none"
                    >
                      <path
                        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                      ></path>
                      <path
                        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                        className="stroke-zinc-400 dark:stroke-zinc-500"
                      ></path>
                    </svg>
                    <div className=" ml-3">Stack</div>
                  </div>
                  <div className="justify-end">
                    
                  </div>
                  
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
                        {stack.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="border shadow w-20 h-20 rounded-full p-2">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-16 w-16 rounded-full object-contain hover:scale-110 transition-transform duration-100 ease-in-out"
                                    src={item.icon}
                                    style={{ color: "transparent" }}
                                />
                                </div>
                                <div className="text-sm font-bold text-zinc-600 dark:text-zinc-400">{item.name}</div>
                                </div>
                        ))}
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
