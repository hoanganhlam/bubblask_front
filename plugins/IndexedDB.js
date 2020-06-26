//prefixes of implementation that we want to test
const test = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
//IDBTransaction interface of the IndexedDB API provides a static, asynchronous transaction on a database using event handler attributes.
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

class IndexedDB {
    constructor(_dbName) {
        this.dbName = _dbName;
        this.dbVersionNumber = 1;
    }

    setDBVersionNumber(_dbVersionNumber) {
        this.dbVersionNumber = _dbVersionNumber;
    }

    open(onsuccess, onerror, onupgradeneeded, objName, keyPath, objData) {
        this.objName = objName;
        this.request = window.indexedDB.open(this.dbName, this.dbVersionNumber);
        this.request.onerror = event => onerror(event);
        this.request.onsuccess = event => {
            this.db = event.target.result;
            onsuccess();
        };
        this.request.onupgradeneeded = event => {
            let db = event.target['result'];
            let objectStore = db.createObjectStore(objName, {keyPath: keyPath});
            if (objData !== undefined) {
                for (let key in objData) {
                    objectStore.add(objData[key]);
                }
            }
            onupgradeneeded(event);
        }
    }

    readAll(callback) {
        let objectStore = this.db.transaction(this.objName).objectStore(this.objName);
        objectStore.openCursor().onsuccess = function (event) {
            let cursor = event.target['result'];
            if (cursor) {
                callback(cursor);
                cursor.continue();
            } else {
                console.log("No more entries!");
            }
        };
    }

    read(id) {
        let transaction = this.db.transaction([this.objName]);
        let objectStore = transaction.objectStore(this.objName);
        return new Promise((resolve, reject) => {
            let request = objectStore.get(id);
            request.onerror = event => reject(event);
            request.onsuccess = event => resolve(request.result);
        });
    }

    add(objData) {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        return new Promise((resolve, reject) => {
            let request = objectStore.add(objData);
            request.onsuccess = event => resolve(event);
            request.onerror = event => reject(event);
        });
    }

    put(objData) {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        return new Promise((resolve, reject) => {
            let request = objectStore.put(objData);
            request.onsuccess = event => resolve(event);
            request.onerror = (event) => reject(event);
        });
    }

    remove(id) {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        return new Promise((resolve, reject) => {
            let request = objectStore.delete(id);
            request.onerror = event => reject(event);
            request.onsuccess = event => resolve(event);
        });
    }

    clearAll(callback) {
        let objectStore = this.db.transaction([this.objName], 'readwrite').objectStore(this.objName);
        let objectStoreRequest = objectStore.clear();
        objectStoreRequest.onsuccess = function (event) {
            callback(event)
        };
    }
};

export default {
    IndexedDB,
    is_supported: Boolean(test)
}
