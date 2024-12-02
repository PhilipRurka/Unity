import algoliasearch from 'algoliasearch/lite';

import type { ApiMethodResponsePromise, ArticleSearchType } from '@unity/types';

type CatchError = {
  message: string;
};

type GetAlgoliaResults = (query: string) => ApiMethodResponsePromise<ArticleSearchType[]>;

const searchClient = algoliasearch(process.env.ALGOLIA_DASHBOARD || '', process.env.ALGOLIA_SEARCH || '');

const index = searchClient.initIndex('articles');

const getAlgoliaResults: GetAlgoliaResults = async (query) => {
  try {
    const res = await index.search<ArticleSearchType>(query, {
      attributesToSnippet: ['content:50'],
      queryLanguages: ['en'],
      queryType: 'prefixAll',
      ignorePlurals: true,
      advancedSyntax: true,
    });

    const result = res.hits as ArticleSearchType[];

    return [{ result }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ error: { message: error.message } }, { status: 503 }];
  }
};

export default getAlgoliaResults;
