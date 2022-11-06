import db from "database/filter/db";
import tx from "database/filter/tx";

function deleteFilter(storeName, key) {
  return new Promise((resolve, reject) => {
    db("filter", storeName)
      .then((db) => {
        tx(db, storeName, "readwrite")
          .then((store) => {
            const readReq = store.delete(key);
            readReq.onsuccess = resolve;
            readReq.onerror = reject;
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

export default deleteFilter;
