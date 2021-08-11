import { db } from '../db/databaseStart.js';
const collection = 'MSM-Scenario';

export class Get {
    static async get(docId) {
        const scenario = await db.collection(collection).doc(docId).get();
        return scenario.data();
    }
}