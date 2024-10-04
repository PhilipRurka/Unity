import { readdir, unlink, writeFile } from 'fs/promises';

import runPrettier from '../utils/runPrettier.js';

const createTypesFile = async () => {
  const contentfulCodegenDir = '../../sdk/types/src/contentful-codegen';
  const filePath = `${contentfulCodegenDir}/SimplerContentfulTypes.ts`;

  try {
    await unlink(filePath);
    // eslint-disable-next-line no-empty
  } catch (_) {}

  const files = await readdir(contentfulCodegenDir);
  const imports: string[] = [];
  const types: string[] = [];
  const mappings: string[] = [];
  files.forEach((file) => {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      const typeName = file.replace('Type', '').replace('.ts', '');
      const importPath = `./${file.replace('.ts', '')}`;
      const typeWithoutLinks = `Type${typeName}WithoutUnresolvableLinksResponse`;
      const camelCaseName = typeName.charAt(0).toLowerCase() + typeName.slice(1);
      imports.push(`import { ${typeWithoutLinks} } from "${importPath}";`);
      types.push(`export type ${typeName}Type = ${typeWithoutLinks};`);
      mappings.push(`${camelCaseName}: ${typeName}Type;`);
    }
  });

  const typeNames = files
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('Type', '').replace('.ts', ''))
    .map((name) => `'${name.charAt(0).toLowerCase() + name.slice(1)}'`);
  const typeUnion = `export type AllContentModelTypes = ${typeNames.join(' | ')};`;

  const contentModelMapping = `export type ContentModelMapping = {
  ${mappings.join('\n  ')}
};`;

  const getByContentModel = `
  export type GetByContentModel = <T extends AllContentModelTypes>(model: T) => Promise<ContentModelMapping[T]>;`;

  const getByContentModelGeneric = `
  export type GetContentModelType = <T extends AllContentModelTypes>(
  model: T) => Promise<ContentModelMapping[T]>;
  `;

  const content = [
    ...imports,
    '',
    typeUnion,
    '',
    ...types,
    '',
    contentModelMapping,
    '',
    getByContentModel,
    '',
    getByContentModelGeneric,
  ].join('\n');

  await writeFile(filePath, content);
  await runPrettier(filePath);
};

export default createTypesFile;
