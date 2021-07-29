//import { db } from './DB/db'
//const db = require('./DB/db');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const serviceAccount = require('../../../claves/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});
const db = admin.firestore();

app.put('/scenario', (req, res) => {
  const scenario = db.collection('MSM-Scenario').add(req.body);
  res.send(scenario.id);
});

app.get('/scenario', (req, res) => {
    res.send('Hello World')
});

app.listen(3000, function() {
    console.log('listening on 3000')
})