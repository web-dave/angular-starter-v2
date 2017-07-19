import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {
  counter = 0;
  doCount;
  constructor(private cd: ChangeDetectorRef) { }

  start() {
    clearInterval(this.doCount);
    this.doCount = setInterval(() => { this.count() }, 1000);
  }

  stop() {
    clearInterval(this.doCount);
  }

  count() {
    this.counter++;
    this.cd.detectChanges();
    console.log(this.counter);
  }

  ngOnInit() { }

}
