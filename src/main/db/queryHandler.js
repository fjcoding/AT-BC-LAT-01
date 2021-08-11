import { Add } from './add.js';
import { Get } from './get.js';
import { Set } from './set.js';

export class QueryHandler {
    static add(data) {
        return Add.add(data);
    }

    static get(docId) {
        return Get.get(docId);
    }

    static set(docId, newData) {
        return Set.set(docId, newData);
    }
}