import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Alpaca from  '@alpacahq/alpaca-trade-api';

const alpaca = new Alpaca({
    keyId: process.env.keyId,
    secretKey: process.env.secretKey,
    paper: true,
  });

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    alpaca.getAccount().then((account:any) => {
        res.send(account);
      });
  // res.send('Express + TypeScript Server is running');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
