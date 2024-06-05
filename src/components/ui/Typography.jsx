import React from 'react';
const Headline1 = ({ children }) => {
  return (
    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
      {children}
    </h1>
  );
};

const Headline2 = ({ children }) => {
  return (
    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
      {children}
    </h2>
  );
};

const Headline3 = ({ children }) => {
  return (
    <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
      {children}
    </h2>
  );
};

const Paragraph = ({ children, green }) => {
  return (
    <p
      className={`mt-6 text-lg leading-8 ${green ? 'text-green-700' : 'text-gray-600 dark:text-gray-400'}`}
    >
      {children}
    </p>
  );
};

const ParagraphSmall = ({ children }) => {
  return (
    <p className="mt-6 text-sm leading-8 text-gray-600 dark:text-gray-400">
      {children}
    </p>
  );
};

const OrdList = ({ children }) => {
  return (
    <ol className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
      {children}
    </ol>
  );
};

const UnordList = ({ children }) => {
  return (
    <ul className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
      {children}
    </ul>
  );
};

const Bold = ({ children }) => {
  return <span className="font-semibold">{children}</span>;
};

export {
  Headline1,
  Headline2,
  Headline3,
  Paragraph,
  ParagraphSmall,
  OrdList,
  UnordList,
  Bold,
};
