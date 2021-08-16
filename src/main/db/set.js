import { CollectionCall } from './collectionCall';


export class SetCall extends CollectionCall{
    static async set(docId, newData) {
        await this.dbCall.doc(docId).set(newData);
    }
}