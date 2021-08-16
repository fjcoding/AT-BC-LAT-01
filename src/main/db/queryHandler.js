import { AddCall } from './add.js';
import { GetCall } from './get.js';
import { SetCall } from './set.js';

export class QueryHandler {
    static add(data) {
        return AddCall.add(data);
    }

    static get(docId) {
        return GetCall.get(docId);
    }

    static set(docId, newData) {
        return SetCall.set(docId, newData);
    }
}