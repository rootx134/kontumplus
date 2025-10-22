import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import eventsRouter from './routes/events.js';
import contactRouter from './routes/contact.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandlers.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(compression());
app.use(morgan('dev'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get(['/e', '/e/*'], (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.use('/api/events', eventsRouter);
app.use('/api/contact', contactRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const port = Number(process.env.PORT) || 3000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`KontumPlus experience server listening on port ${port}`);
    });
}

export default app;
