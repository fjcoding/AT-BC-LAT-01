import { QueryHandler } from './db/queryHandler.js';
import makeApp from './app.js';

const app = makeApp(QueryHandler);

app.listen(3000, function() {
    console.log('listening on 3000');
});