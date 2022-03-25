import { Component } from '@angular/core';

/*
scenerio: 
hello world 
ello worl
llo wor
lo wo
o w 
_


*/

/* Potential Inprovement
1. pramid, with strict shape with DOM manipulation, and without DOM manipulation
*/

@Component({
  selector: 'app-practice-triangle',
  templateUrl: './practice-triangle.component.html',
  styleUrls: ['./practice-triangle.component.css'],
})
export class PracticeTriangleComponent {
  userInput: string = '';
  temp: string = '';
  list: string[] = [];

  ngOnInit() {}

  onClick() {
    if (this.list.length != 0) {
      this.list = [];
    }
    this.temp = this.userInput;
    this.list.push(this.temp);
    for (let i = Math.floor(this.userInput.length / 2) - 1; i > -1; i--) {
      this.temp = this.temp.slice(1, this.temp.length - 1);
      this.list.push(this.temp);
    }
    this.list = this.addBack(this.list);
    if (this.userInput !== '') {
      this.userInput = '';
    }
  }

  // ["a", "b"] => ["a", "b", "b", "a"]
  addBack(aList: string[]): string[] {
    let finalList = [...aList];
    for (let i = aList.length - 1; i > -1; i--) {
      finalList.push(aList[i]);
    }
    return finalList;
  }
}
