/* eslint-disable @typescript-eslint/no-explicit-any */
import { DispatchType } from '../actionsTypes';

export const initialSdkStatus = async (
  dispatch: DispatchType,
  getState: any,
  { config }: { config: any },
) => {
  try {
    const { productSetup } = config;

    const result: any = {};

    Object.keys(productSetup)
      .filter((type: string) => productSetup[type])
      // eslint-disable-next-line no-return-assign
      .forEach(
        (type: string) => (result[type] = { status: true, menssage: '' }),
      );

    await dispatch({ type: 'SET_ALL_SDK', payload: result });
  } catch (err) {
    // console.log(err);
  }
};
