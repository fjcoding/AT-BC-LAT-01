import express, { json, urlencoded } from 'express';
import routerScenario from './routes/scenario.resource';
import routerActor from './routes/actor.resource';
import routerAction from './routes/action.resource';
import routerWeapon from './routes/weapon.resource';

// Express configuration
const app = express();
app.use(json());
app.use(
    urlencoded({
        extended: true,
    })
);

//route to Scenarios requests
app.use('/scenario', routerScenario);
app.use('/actor', routerActor);
app.use('/action', routerAction);
app.use('/weapon', routerWeapon);

export default app;
