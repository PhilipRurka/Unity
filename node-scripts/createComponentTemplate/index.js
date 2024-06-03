/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const paths = {
  1: path.join(dirname, "../../apps/unity-compendium/src/components"),
  2: path.join(dirname, ""),
  3: path.join(dirname, "../../sdk/components/src"),
};

const askForPath = () => {
  rl.question("Select a project (1: Unity Compendium, 2: Admin, 3: SDK Components): ", (pathOption) => {
    if (["1", "2", "3"].includes(pathOption)) {
      askForComponentName(paths[pathOption]);
    } else {
      console.log("Invalid option. Please select 1, 2, or 3.");
      askForPath();
    }
  });
};

const askForComponentName = (baseDir) => {
  rl.question("Enter the component name: ", (value) => {
    const dirPath = path.join(baseDir, value);
    const indexPath = path.join(dirPath, "index.ts");
    const componentPath = path.join(dirPath, `${value}.tsx`);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });

      const indexContent = `import ${value} from './${value}';\n\nexport default ${value};\n`;
      fs.writeFileSync(indexPath, indexContent);

      const componentContent = `type ${value}Props = {};\n\nconst ${value} = ({}: ${value}Props) => {\n  console.log('');\n  return <div data-component='c${value}'></div>;\n}\n\nexport default ${value};\n`;
      fs.writeFileSync(componentPath, componentContent);

      console.log(`${value} component created successfully in ${baseDir}!`);
    } else {
      console.log("Component already exists. Please choose a different name or delete the existing folder.");
    }

    rl.close();
  });
};

askForPath();
