//import { db } from './DB/db'
import express, { json, urlencoded } from 'express';
import serviceAccount from '../../../claves/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
import admin from 'firebase-admin';


// Express configuration
const app = express();
app.use(json());
app.use(urlencoded({
  extended: true
}));

// DB configuration
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});
const db = admin.firestore();


// HTTP Methods
app.put('/scenario', (req, res) => {
  const scenario = db.collection('MSM-Scenario').add(req.body);
  console.log(scenario.id);
  res.send(scenario.id);
});

app.post('/scenario', (req, res) => {
  res.send(req.body);
});

app.get('/scenario', (req, res) => {
    res.send('Hello World')
});

app.listen(3000, function() {
    console.log('listening on 3000')
})