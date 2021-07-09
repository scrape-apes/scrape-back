import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import scraperController from './controllers/scraper.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/results', scraperController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
