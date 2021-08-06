import { db } from './databaseStart';
const collection = 'MSM-Scenario';

export class QueryHandler {
    static async add(data) {
        const scenarioResult = await db.collection(collection).add(data);
        return scenarioResult.id;
    }

    static async get(docId) {
        const scenario = await db.collection(collection).doc(docId).get();
        return scenario;
    }

    static async set(docId, newData) {
        await db.collection(collection).doc(docId).set(newData);
    }
}