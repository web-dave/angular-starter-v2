import { idbKeyval } from './idb-keyval';

export function SyncListeners() {
  return (worker) => new SyncListenersImpl(worker);
}

export class SyncListenersImpl {
  setup(ops) { }

  syncEvent() {
    self.addEventListener('sync', function (event) {
      console.log('[Sync.js]: Received sync event', event.tag);

      // if ((event.tag === 'send-push') || (event.tag === 'test-tag-from-devtools')) {
      //   event.waitUntil(

      //     idbKeyval.get('send-post')
      //       .then(function (message) {
      //         console.log('[Service Worker]: Read data from IndexedDB', message);

      //         return fetch('http://localhost:3030/msg/', {
      //           method: 'POST',
      //           body: JSON.stringify(message),
      //           headers: {
      //             'Accept': 'application/json',
      //             'X-Requested-With': 'XMLHttpRequest',
      //             'Content-Type': 'application/json'
      //           }
      //         });
      //       })
      //       .then(function (response) {
      //         console.log('[Service Worker]: Received response from backend', response);
      //         return response.json();
      //       })
      //       .then(function (data) {
      //         if (data.status === '200') {
      //           console.log('[Service Worker]: Tweet post success');
      //         }
      //       })
      //       .catch(function (error) {
      //         console.error(error);
      //       })

      //   );
      // }
    });
  }

  fetchEvent() {
    self.addEventListener('fetch', (event) => {

      // Match requests for data and handle them separately
      if ((event.request.url.indexOf('msg/') != -1)&& (event.method === 'POST')) {
        console.log('event:', event);
        // idbKeyval.set('send-post', event.request.body)
        // .then(function () {});
      }
    });
  }

  constructor() {
    this.syncEvent();
    this.fetchEvent();
  }

}


