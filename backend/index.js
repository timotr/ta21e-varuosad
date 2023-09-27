import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

import parts from './controllers/parts.js';
import { checkLoggedIn } from './components/auth.js';

app.use('/api/parts', checkLoggedIn, parts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})