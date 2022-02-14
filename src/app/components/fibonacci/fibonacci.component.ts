import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css'],
})
export class FibonacciComponent {
  fiboList: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21];
  fiboItem: number = 0;

  addFibo(): void {
    console.log('addFibo');
    this.fiboItem =
      this.fiboList[this.fiboList.length - 1] +
      this.fiboList[this.fiboList.length - 2];
    this.fiboList.push(this.fiboItem);
  }
}
