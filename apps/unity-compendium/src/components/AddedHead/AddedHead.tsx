import Head from 'next/head';

const AddedHead = () => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CreativeWorkSeries',
              name: 'Unity Compendium',
              description:
                'Immerse yourself in a meticulously crafted fantasy world filled with rich lore, breathtaking landscapes, and unique creations.',
              author: {
                '@type': 'Person',
                name: 'Philip Rurka'
              },
              creator: {
                '@type': 'Person',
                name: 'Philip Rurka'
              },
              publisher: {
                '@type': 'Person',
                name: 'Philip Rurka'
              },
              genre: 'Fantasy',
              keywords: ['fantasy', 'world-building', 'lore', 'Unity Compendium'],
              inLanguage: 'en-US',
              url: 'https://www.unitystory.info',
              image: 'https://www.unitystory.info/unity-logo.png',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://www.unitystory.info'
              }
            },
            {
              '@type': 'WebSite',
              url: 'https://www.unitystory.info',
              name: 'Unity Compendium'
            },
            {
              '@type': 'Organization',
              name: 'Unity Compendium',
              url: 'https://www.unitystory.info',
              logo: 'https://www.unitystory.info/unity-logo.png'
            }
          ]
        })
      }}
    />
  </Head>
);

export default AddedHead;
