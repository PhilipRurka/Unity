/* eslint-disable import/no-extraneous-dependencies */
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const envVariables = () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const envPath = path.resolve(dirname, "../../.env.local");

  dotenv.config({ path: envPath });

  return { ...process.env };
};

export default envVariables;
