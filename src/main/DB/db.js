const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});

export const db = admin.firestore();