import { InternalToolsModel } from '@unity/models';
import { ApiMethodResponseType, AuditFrontendType, ErrorGetType, SuccessGetType } from '@unity/types';

import { connectToDatabase } from '../utils';

type CatchError = {
  message: string;
};

type UpdateInternalTools = (audits: AuditFrontendType) => ApiMethodResponseType<{ message: string }>;

const updateInternalTools: UpdateInternalTools = async (audits) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    await InternalToolsModel.findOneAndUpdate(
      {},
      {
        ...audits,
      },
      { upsert: true }
    );

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default updateInternalTools;
