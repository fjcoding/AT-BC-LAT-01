import { db } from 'databaseStart.js';
const collection = 'MSM-Scenario';

export class QueryHandler {
    async add(data) {
        const scenario = await db.collection(collection).add(data);
        return scenario.id;
    }

    async get(docId) {
        await db.collection(collection).doc(docId).get();
    }

    async set(docId, newData) {
        await db.collection(collection).doc(docId).set(newData);
    }
}