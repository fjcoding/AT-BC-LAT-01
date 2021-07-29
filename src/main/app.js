import express from 'express';
const app = express();
import scenariosRoutes from './routes/scenarios';

app.use('/scenarios', scenariosRoutes);

export default app;
