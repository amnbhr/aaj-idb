import db from "database/filter/db";
import tx from "database/filter/tx";

function getFilters(storeName) {
  return new Promise((resolve, reject) => {
    db("filter", storeName)
      .then((db) => {
        tx(db, storeName, "readonly")
          .then((store) => {
            const readReq = store.getAll();
            readReq.onsuccess = resolve;
            readReq.onerror = reject;
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

export function getFilterByKey(storeName, key) {
  return new Promise((resolve, reject) => {
    db("filter", storeName)
      .then((db) => {
        tx(db, storeName, "readonly")
          .then((store) => {
            const readReq = store.index("key").get(key);
            readReq.onsuccess = resolve;
            readReq.onerror = reject;
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

export default getFilters;
