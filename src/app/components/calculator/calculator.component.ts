import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  /***
  scenerio 01: 13 * 17 => 
  [1, 3,, *, 1, 7, = ] will the pushed into the array,
  along the way, if the user typed something wrong, he can click "<-" to delete the last item in the array
  ***/

  digits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  operators: string[] = ['+', '-', '*', '/'];
  specialOperators: string[] = ['C', '<-', '='];
  currentExpression: string = '';
  res: number | undefined = undefined;

  addToExpression(value: string): void {
    console.log('addToExpression', value);
    this.currentExpression += value;
  }

  clean() {
    console.log('clean');
    this.currentExpression = '';
  }

  back() {
    console.log('back');
    this.currentExpression = this.currentExpression.slice(0, -1);
  }

  getResult() {
    console.log('getResult');
    this.currentExpression = eval(this.currentExpression);
  }
}
