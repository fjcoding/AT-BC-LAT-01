import admin from 'firebase-admin';
import serviceAccount from '../../../../keys/db_key.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com',
});
export const db = admin.firestore();