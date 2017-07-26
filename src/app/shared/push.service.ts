import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { NgPushRegistration } from '@angular/service-worker';

@Injectable()
export class PushService {
  private subscription: NgPushRegistration;

  constructor(private http: Http) { }
  // push.service.ts
  // Subscribe to Push
  subscribeToPush(subscr: NgPushRegistration) {
    this.subscription = subscr;
    this.http.post(
      'http://localhost:3030/webpush',
      { action: 'subscribe', subscription: subscr }
    )
      .map(res => res.json()).subscribe(data => console.log('--->', data))
  }

  // undsubscribe from push
  unsubscribeFromPush() {
    this.http.post( 'http://localhost:3030/webpush', { action: 'unsubscribe', subscription: this.subscription })
      .map(res => res.json()).subscribe(data => {
        console.log('--->', data);
        this.subscription = null;
      })
  }

  // send push
  sendPush(msg) {
    const payload = { 'users': ['ALL'], 'msg': { 'msg': msg } };
    return this.http.post( 'http://localhost:3030/msg', payload )
      .map(res => res.json())
  }
}
