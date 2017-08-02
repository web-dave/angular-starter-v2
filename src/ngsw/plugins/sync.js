export function SyncListeners() {
  return (worker) => new SyncListenersImpl(worker);
}

export class SyncListenersImpl {
  setup(ops) { }

  constructor() {
    self.addEventListener('sync', function (event) {
      console.log('--> sync');
      console.log('event', event.tag);

      if ((event.tag === 'send-push') || (event.tag === 'test-tag-from-devtools')) {
        if (window.localStorage.getItem('send-push')) {
          const message = window.localStorage.getItem('send-push');

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
          })
          .then(function (response) {
            window.localStorage.removeItem('send-push');
            return response.json();
          })
        }
      }
    });
  }

}


