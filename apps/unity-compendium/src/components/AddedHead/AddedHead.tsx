import Head from 'next/head';

const AddedHead = () => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Unity Compendium',
          description:
            'Immerse yourself in a meticulously crafted fantasy world filled with rich lore, breathtaking landscapes, and unique creations.',
          author: { '@type': 'Person', name: 'Philip Rurka' },
          creator: { '@type': 'Person', name: 'Philip Rurka' },
          publisher: { '@type': 'Person', name: 'Philip Rurka' },
          keywords: 'fantasy, world-building, lore, Unity Compendium',
          genre: 'Fantasy',
          inLanguage: 'en-US',
          url: 'https://www.unitystory.info',
          image: 'https://www.unitystory.info/unity-logo.png',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.unitystory.info',
          },
        }),
      }}
    />
  </Head>
);

export default AddedHead;
