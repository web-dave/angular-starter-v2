// clickNotification.js

export function ClickNotification() {
  return (worker) => new ClickNotificationImpl(worker);
}

export class ClickNotificationImpl {

  setup(ops) { }

  notificationclick(){
    self.addEventListener('notificationclick', function (event) {
      console.log('notificationclick: ', event);
    });
  }

  notificationclose(){
    self.addEventListener('notificationclose', function (event) {
      console.log('notificationclose');
    });
  }

  constructor(sw) {
    this.notificationclick();
    this.notificationclose();
  }

}
