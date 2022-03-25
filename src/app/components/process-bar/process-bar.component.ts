import { Component } from '@angular/core';

/*
TODO: 1. back speed twice faster
*/

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.css'],
})
export class ProcessBarComponent {
  width = 0;
  timer: any;

  run() {
    console.log('run');
    this.timer = setInterval(() => {
      this.width = (this.width + 10) % 110;
      console.log(this.width);
    }, 1000);
  }

  ngOnInit() {
    console.log('init');
    this.run();
  }

  ngOnDestroy() {
    console.log('destroy');
    clearInterval(this.timer);
    this.timer = undefined;
  }

  toggle() {
    console.log('toggle');
    if (this.timer == undefined) {
      this.run();
    } else if (this.timer != undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  getWidth(): string {
    return this.width.toString();
  }
}
