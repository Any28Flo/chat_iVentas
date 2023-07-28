import express from 'express';
import cors from 'cors';

//import session from "express-session";


import { buildApp } from './app';
import mongoose from 'mongoose';

import config from './utils/config';

mongoose.connect(config.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}));

const endpoint = buildApp(app);

app.listen(4000, () => {
    console.log(`GraphQL API located at http://localhost:4000${endpoint}`);
});
