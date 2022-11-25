
import { readFileSync } from 'fs';
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const {
  homepage,
  version
} = pkg
export default `
/*!
 * v3-virtual-list v${version}
 * open source under the MIT license
 * ${homepage}
 */
`