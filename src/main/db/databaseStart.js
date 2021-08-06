import admin from 'firebase-admin';
import serviceAccount from '../../../../keys/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
// import { db } from './DB/db'

// DB configuration
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com',
});
export const db = admin.firestore();
