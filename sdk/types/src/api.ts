export type SuccessGetType<T> = [{ result: T }, { status: number }];
export type ErrorGetType = [{ error: { message: string } }, { status: number }];

export type ApiMethodResponse<T> = SuccessGetType<T> | ErrorGetType;
export type ApiMethodResponsePromise<T> = Promise<ApiMethodResponse<T>>;
