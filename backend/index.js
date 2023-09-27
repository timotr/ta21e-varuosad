import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

import { db, parts } from './drizzle/schema.js';

app.get('/', async (req, res) => {
  try {
    let result = await db.select().from(parts);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send({ error: "Error fetching parts", e });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})