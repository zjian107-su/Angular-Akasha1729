import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent implements OnInit, OnDestroy {
  activate: number = 0;
  timer: any;

  ngOnInit(): void {
    this.run();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  stopTimer(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  resumeTimer() {
    if (this.timer === undefined) {
      this.run();
    }
  }

  run() {
    this.timer = setInterval(() => {
      this.activate = (this.activate + 1) % 3;
      console.log(this.activate);
    }, 2000);
  }
}
