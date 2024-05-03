import client from '@/Lib/createClient';

type SuccessGet = [{ data: any }, { status: number }];
type ErrorGet = [{ data: { message: string } }, { status: number }];

type GetByContentModel = (reqData: { contentModel: string }) => Promise<SuccessGet | ErrorGet>;

type CatchError = {
  message: string;
};

const getByContentModel: GetByContentModel = async (reqData) => {
  try {
    const { contentModel } = reqData;

    client().getContentType(contentModel);

    return [{ data: 'any' }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default getByContentModel;
