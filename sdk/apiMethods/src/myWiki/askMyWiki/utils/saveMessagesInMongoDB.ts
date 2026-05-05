import { MyWikiChatMessagesModel } from '@unity/models';
import { ApiMethodResponsePromise, CatchError, ErrorGetType, MyWikiResponseType, SuccessGetType } from '@unity/types';

type SaveMessagesInMongoDB = (
  userId: string,
  query: string,
  context: string
) => ApiMethodResponsePromise<MyWikiResponseType>;

const saveMessagesInMongoDB: SaveMessagesInMongoDB = async (userId, query, answer) => {
  let response: SuccessGetType<MyWikiResponseType> | ErrorGetType;
  let formattedResult: MyWikiResponseType;

  try {
    const result: any = await MyWikiChatMessagesModel.findOneAndUpdate(
      { userId },
      {
        $push: {
          messages: {
            $each: [
              { role: 'user', content: query },
              { role: 'assistant', content: answer },
            ],
          },
        },
        $setOnInsert: { createdAt: new Date() },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    ).lean();

    formattedResult = {
      messages: result.messages || [],
      createdAt: result?.createdAt,
    };

    response = [{ result: formattedResult }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default saveMessagesInMongoDB;
