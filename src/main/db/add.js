import { CollectionCall } from './collectionCall.js';


export class AddCall extends CollectionCall{
    static async add(data) {
        const scenario = await this.dbCall.add(data);
        return scenario.id;
    }
}