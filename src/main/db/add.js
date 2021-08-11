import { db } from '../db/databaseStart.js';
const collection = 'MSM-Scenario';

export class Add {
    static async add(data) {
        const scenario = await db.collection(collection).add(data);
        return scenario.id;
    }
}