import admin from 'firebase-admin';
import serviceAccount from '../../../../keys/metal-slug-maker-firebase-adminsdk-0j54i-066b240c88.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com',
});
export const db = admin.firestore();
