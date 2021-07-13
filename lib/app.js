import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import authController from './controllers/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import scraperController from './controllers/scraper.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(cookieParser());

app.use(authController);
app.use('/api/v1/results', scraperController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
