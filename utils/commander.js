import commander from "commander";
const { program } = commander;
export default program
  .version("0.0.1")
  .option("-d, --delete", "Delete source folder")
  .option("-o, --output [type]", "Output folder", "./dist")
  .option("-f, --folder <type>", "Input folder");
