import runPrettier from "../utils/runPrettier.js";
import { readdir, unlink, writeFile } from "fs/promises";

const createTypesFile = async () => {
  const filePath = "../../sdk/types/src/contentful-codegen/SimplerContentfulTypes.ts";

  try {
    await unlink(filePath);
    // eslint-disable-next-line no-empty
  } catch (_) {}

  const files = await readdir("@types/contentful-codegen");
  const imports = [];
  const types = [];
  files.forEach((file) => {
    if (file.endsWith(".ts") && file !== "index.ts") {
      const typeName = file.replace("Type", "").replace(".ts", "");
      const importPath = `./${file.replace(".ts", "")}`;
      const typeWithoutLinks = `Type${typeName}WithoutUnresolvableLinksResponse`;
      imports.push(`import { ${typeWithoutLinks} } from "${importPath}";`);
      types.push(`export type ${typeName}Type = ${typeWithoutLinks}`);
    }
  });

  const typeNames = files
    .filter((file) => file.endsWith(".ts") && file !== "index.ts")
    .map((file) => file.replace("Type", "").replace(".ts", ""))
    .map((name) => `'${name.charAt(0).toLowerCase() + name.slice(1)}'`);
  const typeUnion = `export type AllContentModelTypes = ${typeNames.join(" | ")};`;
  const content = [...imports, "", typeUnion, "", ...types].join("\n");
  await writeFile(filePath, content);
  await runPrettier(filePath);
};

export default createTypesFile;
