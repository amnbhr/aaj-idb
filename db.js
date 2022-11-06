function db(dbName, storeName) {
  return new Promise((resolve, reject) => {
    const dbReq = indexedDB.open(dbName, 3);

    dbReq.onupgradeneeded = (event) => {
      const db = event.target.result;
      const store = db.createObjectStore(storeName, {
        autoIncrement: true,
      });
      store.createIndex("key", "key", { unique: true });
    };

    dbReq.onsuccess = (event) => {
      resolve(event.target.result);
    };

    dbReq.onerror = (event) => reject(event);
  });
}

export default db;
