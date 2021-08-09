import * as admin from 'firebase-admin';
admin.initializeApp(); //SDK started on offline mode
const mockDBConnection = admin.firestore();

export class mockQueryHandler { //a carbon copy of the QueryHandler class
    static async add(data) {
        const scenario = await mockDBConnection.collection(collection).add(data);
        return scenario.id;
    }

    static async get(docId) {
        const scenario = await mockDBConnection.collection(collection).doc(docId).get();
        return scenario;
    }

    static async set(docId, newData) {
        await mockDBConnection.collection(collection).doc(docId).set(newData);
    }
}