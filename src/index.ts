import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import routerHandler from './router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (_, res: Response) => res.send('NinjaCat'));
app.use('/v1', routerHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});