import { Document } from 'mongodb';

import { InternalToolsModel } from '@unity/models';
import { ApiMethodResponsePromise, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type GetUsersType = () => ApiMethodResponsePromise<unknown>;

type CatchError = {
  message: string;
};

const getUsers: GetUsersType = async () => {
  let response: SuccessGetType<Document[]> | ErrorGetType;

  try {
    await connectToDatabase();

    const audit = await InternalToolsModel.find(
      {},
      {
        _id: 0,
        lastAlgoliaUpdate: '$last_algolia_update',
        lastIncompleteUpdate: '$last_incomplete_update',
        lastLinkPlacementUpdate: '$last_link_placement_update',
        hierarchyLinks: '$hierarchy_links',
      }
    ).exec();

    response = [{ result: audit[0] }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getUsers;
