import { CollectionCall } from './collectionCall.js';

export class GetCall extends CollectionCall{
    static async get(docId) {
        const scenario = await this.dbCall.doc(docId).get();
        return scenario.data();
    }
}