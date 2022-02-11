import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter-auto-increment',
  templateUrl: './counter-auto-increment.component.html',
  styleUrls: ['./counter-auto-increment.component.css'],
})
export class CounterAutoIncrementComponent {
  count: number = 0;
  timerID?: number;
  isRunning: boolean = true;

  ngOnInit(): void {
    console.log('Init');
    this.startTimer();
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    this.stopTimer();
  }

  startTimer(): void {
    console.log('Start Timer');
    this.timerID = setInterval(() => {
      this.count++;
    }, 1000) as unknown as number;
  }

  stopTimer(): void {
    console.log('Stop Timer');
    if (this.timerID !== undefined) {
      clearInterval(this.timerID);
      this.timerID = undefined; // this is important to help prevent bug later
    }
  }

  toggle(): void {
    if (this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
    this.isRunning = !this.isRunning;
  }

  reset(): void {
    this.count = 0;
    this.stopTimer();
    this.startTimer();
  }
}
