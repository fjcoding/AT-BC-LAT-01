const express = require('express');
const router = express.Router();

//Route firebaseAdmin
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});

//const db = admin.firestore();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET requests to API/scenarios'
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handling POST requests to API/scenarios'
    });
});

router.put('/:objID', (req, res) => {
    const id = req.params.objID;
    res.status(200).json({
        message: 'Handling PUT requests with a specified Object ID to API/scenarios',
        id: id
    });
});

module.exports = router;