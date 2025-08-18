import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const port = process.env.PORT;
export const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
   console.log(`Running on port ${port}`);
});