import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'my';
  constructor(private sw: NgServiceWorker) { }

  ngOnInit() {
    this.sw.updates.subscribe(event => {
      if (event.type === 'pending') {
        if (window.confirm('There is a new version available. Do you want to update?')) {
          this.sw.activateUpdate(event.version);
        }
      } else {
        location.reload();
      }
    })
  }
}
