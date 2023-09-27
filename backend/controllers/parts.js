import express from 'express'
const router = express.Router()

import { db, parts } from '../drizzle/schema.js'

router.get('/', async (req, res) => {
  try {
    let result = await db.select().from(parts);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send({ error: "Error fetching parts", e });
  }
})

router.post('/', async (req, res) => {
  try {
    let result = await db.insert().into(parts).values(req.body);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send({ error: "Error fetching parts", e });
  }
})

export default router