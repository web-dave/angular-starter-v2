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
      console.log('[push.component sendPush]: Message send')
      msg = { title: '', message: '' };
    })
  }

  sendMessage(msg) {
      this.sendPush(msg);
  }

}
