import dotenv from "dotenv";

dotenv.config({ path: "../.env.local" });

const config = {
  mongodb: {
    url: `${process.env.MONGODB_URI}${process.env.MONGODB_DATABASE}`,
  },
  migrationsDir: "./scripts",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "esm",
};

export default config;
