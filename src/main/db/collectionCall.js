import { db } from '../db/databaseStart.js';
const collection = 'MSM-Scenario';

export class CollectionCall {
    static dbCall = db.collection(collection);
}