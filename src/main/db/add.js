import { CollectionCall } from './collectionCall';


export class AddCall extends CollectionCall{
    static async add(data) {
        const scenario = await this.dbCall.add(data);
        return scenario.id;
    }
}