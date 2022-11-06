function tx(db, storeName, permissions) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, permissions);
    const store = tx.objectStore(storeName);

    tx.oncomplete = resolve(store);

    tx.onerror = (event) => reject(event);
  });
}

export default tx;
