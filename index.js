import { getInput, setOutput } from '@actions/core';
import cache_file from './src/cache_file';

// TODO: Make this an executable github action
/**
 * Outputs file path to `file`, taking `CONTENT` and `EXT`
 */
export default () => {
  setOutput('file', cache_file(getInput('CONTENT'), getInput('EXT')));
}
