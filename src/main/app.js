import express, { json, urlencoded } from 'express';
import resourceScenario from './routes/scenario.resource.js';
// import resourceActor from './routes/actor.resource.js';
// import resourceAction from './routes/action.resource.js';
import resourceWeapon from './routes/weapon.resource.js';

export default function(QueryHandler) {
    const routerScenario = resourceScenario(QueryHandler);
    // const routerActor = resourceActor(QueryHandler);
    // const routerAction = resourceAction(QueryHandler);
    const routerWeapon = resourceWeapon(QueryHandler);

    // Express configuration
    const app = express();
    app.use(json());
    app.use(
        urlencoded({
            extended: true,
        })
    );

    //Routes
    app.use('/scenario', routerScenario);
    // app.use('/actor', routerActor);
    // app.use('/action', routerAction);
    app.use('/weapon', routerWeapon);

    return app;
}