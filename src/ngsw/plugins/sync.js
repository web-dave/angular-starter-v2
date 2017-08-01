
export function SyncListeners() {
  return (worker) => new SyncListenersImpl(worker);
}

export class SyncListenersImpl {
  setup(ops) { }

  constructor() {
    self.addEventListener('sync', function (event) {
      console.log('--> sync');
      console.log('event', event.tag);

      if ((event.tag === 'send-push')||(event.tag === 'test-tag-from-devtools')) {
        event.waitUntil(

          idbKeyval.get('send-push')
            .then(function (message) {
              console.log('message', message);
              var payload = { 'users': ['ALL'], 'msg': { 'msg': message } };
              return fetch('http://localhost:3030/msg', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                  'Accept': 'application/json',
                  'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json'
                }
              });
            })
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              if (data.status === '200') {
                idbKeyval.clear('send-push');
              }
            })
            .catch(function (error) {
              console.error(error);
            })

        );
      }
    });
  }

}
  var db;

  function getDB() {
    if (!db) {
      db = new Promise(function(resolve, reject) {
        var openreq = indexedDB.open('keyval-store', 1);

        openreq.onerror = function() {
          reject(openreq.error);
        };

        openreq.onupgradeneeded = function() {
          // First time setup: create an empty object store
          openreq.result.createObjectStore('keyval');
        };

        openreq.onsuccess = function() {
          resolve(openreq.result);
        };
      });
    }
    return db;
  }

  function withStore(type, callback) {
    return getDB().then(function(db) {
      return new Promise(function(resolve, reject) {
        var transaction = db.transaction('keyval', type);
        transaction.oncomplete = function() {
          resolve();
        };
        transaction.onerror = function() {
          reject(transaction.error);
        };
        callback(transaction.objectStore('keyval'));
      });
    });
  }

  var idbKeyval = {
    get: function(key) {
      var req;
      return withStore('readonly', function(store) {
        req = store.get(key);
      }).then(function() {
        return req.result;
      });
    },
    set: function(key, value) {
      return withStore('readwrite', function(store) {
        store.put(value, key);
      });
    },
    delete: function(key) {
      return withStore('readwrite', function(store) {
        store.delete(key);
      });
    },
    clear: function() {
      return withStore('readwrite', function(store) {
        store.clear();
      });
    },
    keys: function() {
      var keys = [];
      return withStore('readonly', function(store) {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        (store.openKeyCursor || store.openCursor).call(store).onsuccess = function() {
          if (!this.result) return;
          keys.push(this.result.key);
          this.result.continue();
        };
      }).then(function() {
        return keys;
      });
    }
  };

