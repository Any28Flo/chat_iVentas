import express, { Application } from 'express';
import config from "./config";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT: number = 8080 | config.PORT;
import { postMessage } from './src/controllers/chatController';

// Controllers
app.post('/message', postMessage);
app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});