import db from "database/filter/db";
import tx from "database/filter/tx";

function setFilter(filter, storeName) {
  return new Promise((resolve, reject) => {
    db("filter", storeName)
      .then((db) => {
        tx(db, storeName, "readwrite")
          .then((store) => {
            const readReq = store.add(
              { ...filter, timeStamp: new Date() },
              filter.key
            );
            readReq.onsuccess = resolve;
            readReq.onerror = reject;
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

export default setFilter;
