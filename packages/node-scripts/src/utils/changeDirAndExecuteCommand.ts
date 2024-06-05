/* eslint-disable no-console */
import executeCommand from './executeCommand.js';

const changeDirAndExecuteCommand = async (directory: string, command: string, args: string[]) => {
  try {
    process.chdir(directory);
    await executeCommand(command, args);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default changeDirAndExecuteCommand;
