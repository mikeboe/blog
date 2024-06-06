type IntroProps = {
  headline: string;
  body: string;
  social?:
    | {
        name: string;
        url: string;
      }[]
    | undefined;
};

const Intro = ({ headline, body }: IntroProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        {headline}
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{body}</p>
    </>
  );
};

export default Intro;
