import { PushService } from '../shared/push.service';
import { Component, OnInit } from '@angular/core';
import { NgServiceWorker, NgPushRegistration } from '@angular/service-worker';

@Component({
  selector: 'push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss']
})
export class PushComponent implements OnInit {
  pubKey = 'BGPqIbjDKI5Qja2gHX971n1ZoDL14hb-FihSMDFfvnRjLEl7XQ6FFOYGHxjz9ESB3HX5R10yW27KXARbDrDWfCc';
  msg = { title: '', message: '' };

  constructor(private sw: NgServiceWorker, private push: PushService) { }

  ngOnInit() {
  }

  subscribeToPush() {
    // Subscribe to Push Notifications
    this.sw.registerForPush({ applicationServerKey: this.pubKey })
      .subscribe((r: NgPushRegistration) => {
        console.log('successfully registered', r);
        this.push.subscribeToPush(r)
      },
      err => {
        console.error('error registering for push', err);
      });
  }

  unsubscribeFromPush() {
    this.push.unsubscribeFromPush();
  }

  sendPush(msg) {
    this.push.sendPush(msg).subscribe(data => {
      msg = { title: '', message: '' };
      window.localStorage.removeItem('send-push');
    })
  }

  sendMessage(msg) {
    if ('SyncManager' in window) {

      navigator.serviceWorker.ready.then(function (swRegistration) {
        swRegistration.sync.register('send-push')
          .then(function () {
            window.localStorage.setItem('send-push', msg);
            console.log('[SW Registration]: Background sync registered')
          })
          .catch(function (error) {
            // system was unable to register for a sync,
            // this could be an OS-level restriction
            console.log('[SW Registration]: Error registering Background sync', error)
          })
      })
      this.sendPush(msg);
      console.log('[SW Registration]: Background sync initiated')
    } else {
      console.log('[SW Registration]: Background sync isn`t supported in this browser')
      this.sendPush(msg);
    }
  }

}
