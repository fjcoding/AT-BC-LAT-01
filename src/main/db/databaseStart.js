import admin from 'firebase-admin';
import serviceAccount from '../metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com',
});
export const db = admin.firestore();
