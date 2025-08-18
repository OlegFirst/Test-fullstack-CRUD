import dotenv from 'dotenv';
import routes from './routes/index.js';

const port = process.env.PORT;
export const app = express();

export const server = app.listen(port, () => {
   console.log(`Running on port ${port}`);
});