import { CollectionCall } from './collectionCall';


export class Set extends CollectionCall{
    static async set(docId, newData) {
        await this.dbCall.doc(docId).set(newData);
    }
}