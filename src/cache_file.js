import { writeSync } from 'node:fs';
import { fileSync } from 'tmp';

/**
 * Caches file to tmp folder
 * @param {NodeJS.ArrayBufferView} file 
 * @param {string} ext 
 * @returns temp file path
 */
export default function cache_file(file, ext = '.json') {
  const tmp = fileSync({ postfix: ext });

  writeSync(tmp.fd, file);

  return tmp.name;
}
