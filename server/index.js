import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';

dotenv.config();
const port = process.env.PORT;
export const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use(routes);

app.listen(port, () => {
   console.log(`Running on port ${port}`);
});