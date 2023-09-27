import * as dotenv from "dotenv";
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./drizzle/schema.js",
    out: "./drizzle",
    driver: 'mysql2',
    dbCredentials: {
        connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_DATABASE}`,
    }
};