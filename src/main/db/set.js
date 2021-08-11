import { db } from '../db/databaseStart.js';
const collection = 'MSM-Scenario';

export class Set {
    static async set(docId, newData) {
        await db.collection(collection).doc(docId).set(newData);
    }
}