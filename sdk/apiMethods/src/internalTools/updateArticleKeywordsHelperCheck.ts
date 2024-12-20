import { ApiMethodResponsePromise, ErrorGetType, SuccessGetType, TransformedToRichTextData } from '@unity/types';

import getContentfulEnvironment from '../utils/getContentfulEnvironment';

type CatchError = {
  message: string;
};

type UpdateArticleKeywordsHelperCheck = (
  article: TransformedToRichTextData
) => ApiMethodResponsePromise<{ message: string }>;

const updateArticleKeywordsHelperCheck: UpdateArticleKeywordsHelperCheck = async (
  articleData: TransformedToRichTextData
) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  const { id, transformedData } = articleData;

  try {
    const contentfulEnvironment = await getContentfulEnvironment();
    let entry = await contentfulEnvironment.getEntry(id);

    entry.fields.keywordsHelperCheck = {
      'en-US': transformedData,
    };

    await entry.update();
    entry = await contentfulEnvironment.getEntry(id);

    try {
      await entry.publish();
    } catch (err) {
      const error = err as CatchError;

      response = [{ error: { message: error.message } }, { status: 503 }];
    }

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default updateArticleKeywordsHelperCheck;
