import { PushService } from '../shared/push.service';
import { Component, OnInit } from '@angular/core';
import { NgServiceWorker, NgPushRegistration } from '@angular/service-worker';
import { IdbKeyval } from '../../ngsw/plugins/indexdbhelper';

@Component({
  selector: 'push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss']
})
export class PushComponent implements OnInit {
  pubKey = 'BGPqIbjDKI5Qja2gHX971n1ZoDL14hb-FihSMDFfvnRjLEl7XQ6FFOYGHxjz9ESB3HX5R10yW27KXARbDrDWfCc';
  msg = { title: '', message: '' };
  idbKeyval: IdbKeyval;

  constructor(private sw: NgServiceWorker, private push: PushService) { }

  ngOnInit() {
    this.idbKeyval = new IdbKeyval();
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

  sendMessage(msg) {

    if ('SyncManager' in window) {

      this.idbKeyval.set('send-push', msg)
        .then(function () {
          console.log('[SW Registration]: Wrote data to IndexedDB', msg)

          navigator.serviceWorker.ready.then(function (swRegistration) {
            swRegistration.sync.register('send-push')
              .then(function () {
                console.log('[SW Registration]: Background sync registered')
              })
              .catch(function (error) {
                // system was unable to register for a sync,
                // this could be an OS-level restriction
                console.log('[SW Registration]: Error registering Background sync', error)
              })
          })
        })

    console.log('[SW Registration]: Background sync initiated')
  } else {
    console.log('[SW Registration]: Background sync isn`t supported in this browser')
  }
    this.push.sendPush(msg).subscribe(data => {
      msg = { title: '', message: '' };
    })
  }

}
