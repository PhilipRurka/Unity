/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import { Spinner } from 'cli-spinner';

type ExecuteStep = (stepDescription: string, action: () => unknown, options?: { disableSpinner: boolean }) => unknown;

const executeStep: ExecuteStep = async (stepDescription, action, options) => {
  const spinner = new Spinner('Please hold.. %s');
  spinner.setSpinnerString('|/-\\');

  let value;

  console.log('');

  try {
    if (!options?.disableSpinner) spinner.start();
    value = await action();
    if (!options?.disableSpinner) spinner.stop(true);
    console.log(stepDescription);
  } catch (error: unknown) {
    if (!options?.disableSpinner) spinner.stop(true);

    if (error instanceof Error) {
      console.error('Critical error occurred:', error.message);
    } else {
      console.error('Critical error occurred:', error);
    }
    console.log('');
    process.exit(1);
  }

  return value;
};

export default executeStep;
