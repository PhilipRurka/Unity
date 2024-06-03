/* eslint-disable no-console */
import execCommand from "../utils/executeCommand.js";
import executeStep from "../utils/executeStep.js";
import createTypesFile from "./createTypesFile.js";
import { unlink } from "fs/promises";

const runCommands = async () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = (await import("../utils/envVariables.js")).default();

  const importContentModels = {
    command: "contentful",
    args: [
      "space",
      "export",
      "--space-id",
      CONTENTFUL_SPACE_ID,
      "--management-token",
      CONTENTFUL_CMA_TOKEN,
      "--export-dir",
      "./node-scripts",
      "--content-file",
      "TemporaryContentModelStructure.json",
    ],
  };

  const exportGeneratedTypes = {
    command: "./node_modules/.bin/cf-content-types-generator",
    args: ["./TemporaryContentModelStructure.json", "-o", "./node-scripts", "-X", "-g", "-r"],
  };

  await executeStep(
    "Step 1: TemporaryContentModelStructure.json created and populated with Contentful's content models",
    () => execCommand(importContentModels.command, importContentModels.args),
    { disableSpinner: true }
  );

  await executeStep(
    'Step 2: The types have successfully been generated and are stored in the following directory "@types/contentful-codegen"',
    () => execCommand(exportGeneratedTypes.command, exportGeneratedTypes.args)
  );

  await executeStep("Step 3: TemporaryContentModelStructure.json has been deleted", () =>
    unlink("./node-scripts/TemporaryContentModelStructure.json")
  );

  await executeStep("Step 4: SimplerContentfulTypes.ts has been deleted and re-created", () => createTypesFile());

  console.log("");
  console.log("Done, happy coding");
  console.log("");
};

runCommands();
