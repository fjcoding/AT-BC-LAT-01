import express, { json, urlencoded } from 'express';

// Express configuration
const app = express();
app.use(json());
app.use(urlencoded({
    extended: true
}));

import router from './routes/scenarios';
app.use('/scenario', router);

export default app;