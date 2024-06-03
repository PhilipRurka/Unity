export type SuccessGetType<T> = [{ data: T }, { status: number }];
export type ErrorGetType = [{ data: { message: string } }, { status: number }];

export type ApiMethodResponseType<T> = Promise<SuccessGetType<T> | ErrorGetType>;
