
import mongoose from 'mongoose';
import config from './config';

const DB_URI = config.MONGODB_URL;

mongoose.connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
