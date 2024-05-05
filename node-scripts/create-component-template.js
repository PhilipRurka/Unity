import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Setup to replace dirname in ES Modules
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the component name: ', (value) => {
  const dirPath = path.join(dirname, '..', 'src', 'components', value);
  const indexPath = path.join(dirPath, 'index.ts');
  const componentPath = path.join(dirPath, `${value}.tsx`);

  // Ensure the directory does not already exist
  if (!fs.existsSync(dirPath)) {
    // Create directory
    fs.mkdirSync(dirPath, { recursive: true });

    // Create index.ts file
    const indexContent = `import ${value} from './${value}';\n\nexport default ${value};\n`;
    fs.writeFileSync(indexPath, indexContent);

    // Create <value>.tsx file
    const componentContent = `type ${value}Props = {};\n\nconst ${value} = (): ${value}Props => {\n  console.log('');\n  return <> </>;\n}\n\nexport default ${value};\n`;
    fs.writeFileSync(componentPath, componentContent);

    console.log(`${value} component created successfully!`);
  } else {
    console.log('Component already exists. Please choose a different name or delete the existing folder.');
  }

  rl.close();
});
