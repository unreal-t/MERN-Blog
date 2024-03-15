import express from 'express';

const app = express();

app.listen(3000, () => {
    console.info('Server listening on port 3000');
});