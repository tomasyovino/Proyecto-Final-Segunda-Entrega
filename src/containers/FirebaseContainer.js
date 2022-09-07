import admin from "firebase-admin";
import serviceAccount from "../../db/fir-coder-bf587-firebase-adminsdk-25w3e-16cdb526e8.json" assert {type: "json"};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://url-example.firebaseio.com",
});

const db = admin.firestore();

class FirebaseContainer {
    constructor(collection) {
        this.collection = db.collection(collection);
    }

    async list(id) {
        try {
            const doc = await this.collection.doc(id).get();
            if (!doc.exists) {
                throw new Error ("Document not found...");
            } else {
                const data = doc.data();
                return { ...data, id };
            }
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async listAll() {
        try {
            const result = [];
            const snapshot = await this.collection.get();
            snapshot.forEach(doc => {
                result.push({ id: doc.id, ...doc.data() });
            });
            return result;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async save(elem) {
        try {
            const saved = await this.collection.add(elem);
            return { ...elem, id: saved.id };
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async update(elem) {
        try {
            const updated = await this.collection.doc(elem.id).set(elem);
            return updated;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async delete(id) {
        try {
            const elem = await this.collection.doc(id).delete();
            return elem;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }
};

export default FirebaseContainer;