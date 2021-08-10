import { db } from '../db/databaseStart.js';
const collection = 'MSM-Scenario';

export class QueryHandler {
    static async add(data) {
        const scenario = await db.collection(collection).add(data);
        return scenario.id;
    }

    static async get(docId) {
        const scenario = await db.collection(collection).doc(docId).get();
        return scenario.data();
    }

    static async set(docId, newData) {
        await db.collection(collection).doc(docId).set(newData);
    }
}