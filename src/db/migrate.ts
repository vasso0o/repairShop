//we use this file as a dev tool after we generate the sql code with drizzle, we will then migrate the code to neon postgres to apply those changes

import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "src/db/migrations",
    });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration: ", error);
    process.exit(1);
  }
};

main();
