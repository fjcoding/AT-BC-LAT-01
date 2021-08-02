import express, { json, urlencoded } from 'express';
import router from './routes/scenario';

// Express configuration
const app = express();
app.use(json());
app.use(urlencoded({
    extended: true
}));

//route to Scenarios requests
app.use('/scenario', router);

export default app;