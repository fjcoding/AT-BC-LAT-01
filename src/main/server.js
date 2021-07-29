import express, { json, urlencoded } from 'express';
import admin from 'firebase-admin';
import serviceAccount from '../../../claves/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
// import { db } from './DB/db'


// Express configuration
const app = express();
app.use(json());
app.use(urlencoded({
  extended: true
}));

// DB configuration
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});
const db = admin.firestore();


// HTTP Methods
app.put('/scenario', (req, res) => {
  const id = 'ExampleId01';
  const scenario = db.collection('MSM-Scenario').doc(id).set(req.body);
  res.send(id);
});

app.post('/scenario', (req, res) => {
  res.send(req.body);
});

app.get('/scenario', async (req, res) => {
  const scenario = await db.collection('MSM-Scenario').doc('ExampleId01').get();
  console.log(scenario);
  res.send(scenario.data);
});

app.listen(3000, function() {
    console.log('listening on 3000')
})