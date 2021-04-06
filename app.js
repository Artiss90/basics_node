import * as fs from "fs/promises";
import { resolve } from "path";
import { isAccessible } from "./utils/accessible.js";
import { handleError } from "./utils/handleerror.js";
import SortFiles from "./module/sort.js";
import program from "./utils/commander.js";
import createDirnameAndFileName from "./utils/dirname.js";

const { __dirname } = createDirnameAndFileName(import.meta.url);

program.parse(process.argv);
const output = program.opts().output;

if (!(await isAccessible(output))) {
  await fs.mkdir(output);
}
try {
  const sorting = new SortFiles(output);
  await sorting.readFolder(resolve(__dirname, program.opts().folder));
  console.log("Done. We can delete source folder");
} catch (error) {
  handleError(error);
}
