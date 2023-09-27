import { mysqlTable, bigint, varchar, decimal, index, uniqueIndex } from 'drizzle-orm/mysql-core';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

export const parts = mysqlTable('parts', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    name: varchar('name', { length: 256 }),
    code: varchar('code', { length: 64 }),
    type: varchar('type', { length: 64 }),
    price: decimal("price", {
        precision: 6, scale: 2
    }),
}, (parts) => ({
    nameIndex: index('name_idx').on(parts.name),
    codeIndex: uniqueIndex('code_idx').on(parts.code),
}));
 
export const poolConnection = mysql.createPool({
  host: process.env.DB_HOST ?? "localhost",
  user: process.env.DB_USER ?? "varuosad",
  database: process.env.DB_DATABASE ?? "varuosad",
  password: process.env.DB_PASSWORD ?? "Passw0rd"
});
 
export const db = drizzle(poolConnection);