import algoliasearch from 'algoliasearch/lite';

import type { ArticleSearchType } from '@unity/types';

type SuccessGet = [{ results: ArticleSearchType[] }, { status: number }];
type ErrorGet = [{ data: { message: string } }, { status: number }];

type CatchError = {
  message: string;
};

type GetAlgoliaResults = (query: string) => Promise<SuccessGet | ErrorGet>;

const searchClient = algoliasearch(process.env.ALGOLIA_DASHBOARD || '', process.env.ALGOLIA_SEARCH || '');

const index = searchClient.initIndex('articles');

const getAlgoliaResults: GetAlgoliaResults = async (query) => {
  try {
    const res = await index.search<ArticleSearchType>(query, {
      attributesToSnippet: ['content:50'],
    });

    const results = res.hits as ArticleSearchType[];

    return [{ results }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default getAlgoliaResults;
