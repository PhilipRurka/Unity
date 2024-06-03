export type SuccessGetType<T> = [{ result: T }, { status: number }];
export type ErrorGetType = [{ error: { message: string } }, { status: number }];

export type ApiMethodResponseType<T> = Promise<SuccessGetType<T> | ErrorGetType>;
