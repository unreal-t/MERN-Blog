import express from 'express';
import { mongoose } from 'mongoose';
import dotenv from 'dotenv';
// import cors from 'cors';    
// import postRoutes from './routes/posts.js';

dotenv.config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.info('database connected');
}).catch((err) => {
    console.info(err.message);
});;

const app = express();

app.listen(3000, () => {
    console.info('Server listening on port 3000');
});
