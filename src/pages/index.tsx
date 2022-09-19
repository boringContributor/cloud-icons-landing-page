import type { NextPage } from "next";

const incentives = [
  {
    name: "Pricing",
    description: "Figma is free!",
  },
  {
    name: "Share",
    description: "You can share it via a link",
  },
  {
    name: "Architecture",
    description:
      "You can use one of the best design tools for your architecture",
  },
  {
    name: "Community",
    description: "Join a huge community and simply use templates and plugins",
  },
];

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
          <div>
            <h2 className="prose prose-2xl font-bold tracking-tight text-white">
              Use{" "}
              <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">
                Cloud Icons
              </span>
              , with Figma!
            </h2>
            <p className="my-4 text-white prose prose-xl">
              Cloud Icons is a Figma plugin which allows to easily create cloud
              native diagrams with Figma or FigJam. Use it to enhance your
              architecture by importing cloud provider specific services as
              icons.
            </p>

            <a
              href="https://www.figma.com/community/plugin/1094628499782224426/Cloud-Icons"
              target={"_blank"}
              rel="noreferrer"
              className="cursor-pointer flex items-center justify-between px-5 py-3 bg-white rounded w-28 hover:shadow hover:bg-gray-200"
            >
              <span className="prose prose-lg text-black transition-color">
                Try it
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-Linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>

          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
            <iframe
              height="450"
              width="800"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrHXqGUeuAmoZceO6zP50sD%2FUntitled%3Fnode-id%3D0%253A1"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="sm:flex lg:block">
              <div className="sm:flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-medium text-white">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm text-white">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="mt-8 border-t border-gray-200 pt-4 flex justify-center gap-5">
          <a
            className="hover:opacity-75"
            href="https://twitter.com/boingCntributor"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>

          <a
            className="hover:opacity-75"
            href="https://github.com/boringContributor"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> GitHub </span>

            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
