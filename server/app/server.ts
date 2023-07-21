import express, { Application, Request, Response } from 'express';
import config from "../config"

const app: Application = express();

const PORT: number = 3001 | config.PORT;

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!');
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});