/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import { Spinner } from 'cli-spinner';

const executeStep = async (stepDescription, action, options = {}) => {
  const spinner = new Spinner('Please hold.. %s');
  spinner.setSpinnerString('|/-\\');

  let value;

  console.log('');

  const { disableSpinner } = options;

  try {
    if (!disableSpinner) spinner.start();
    value = await action();
    if (!disableSpinner) spinner.stop(true);
    console.log(stepDescription);
  } catch (error) {
    if (!disableSpinner) spinner.stop(true);
    console.error('Critical error occurred:', error.message);
    console.log('');
    process.exit(1);
  }

  return value;
};

export default executeStep;
