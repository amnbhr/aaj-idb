import deleteFilter from "./deleteFilter";
import setFilter from "./setFilter";

function updateFilter(filter, storeName) {
  return new Promise((resolve, reject) => {
    deleteFilter(storeName, filter.key)
      .then((res) => {
        setFilter(filter, storeName).then(resolve).catch(reject);
      })
      .catch(reject);
  });
}

export default updateFilter;
