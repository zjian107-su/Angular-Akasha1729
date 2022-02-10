import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: number = 0;

  increment(): void {
    console.log('increment');
    this.count++;
  }

  decrement(): void {
    console.log('decrement');
    this.count--;
  }

  reset(): void {
    console.log('reset');
    this.count = 0;
  }
}
