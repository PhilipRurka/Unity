'use client';

import clsx from 'clsx';

// import { Fragment } from 'react';
// import { Markdown } from '@unity/components';
import { HomepageType } from '@unity/types';

type HomeProps = {
  data: HomepageType;
};

const Home = ({
  data: {
    fields: { title, content },
  },
}: HomeProps) => {
  console.log(content);

  return (
    <main
      className={clsx(
        'mx-auto min-h-screen max-w-4xl bg-white bg-opacity-90 px-8 pb-20 pt-32 shadow-article transition-opacity',
        'sm:mt-16 sm:px-16 sm:py-20'
      )}
      data-component="cArticle"
    >
      <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl">{title}</h1>
      {/* {content.map((section, i) => {
        if (!section?.fields) return <Fragment key={`Article-${i}`} />;
  
        return (
          <div key={`Article-${i}`} className="mb-16">
            {section?.fields.title && (
              <>
                <h2 className={clsx('relative text-3xl lg:text-4xl')}>{section?.fields.title}</h2>
                <hr className=" mb-4 border-black" />
              </>
            )}
            <Markdown content={section?.fields.content} />
          </div>
        );
      })} */}
    </main>
  );
};

export default Home;
