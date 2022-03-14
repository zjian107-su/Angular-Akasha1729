import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
})
export class StringComponent {
  orgin_string: string = '';
  aList: string[] = [];
  finalList: string[] = [...this.aList];
  isShow: boolean = false;

  onClick() {
    this.aList = [this.orgin_string];
    this.finalList = [...this.aList];

    this.isShow = !this.isShow;
    let tempString = this.orgin_string;
    let length = tempString.length;

    // reduction
    for (let i = 0; i < Math.floor(length / 2); i++) {
      tempString = tempString.slice(1, tempString.length - 1);
      // console.log(tempString);
      this.aList.push(tempString);
      this.finalList.push(tempString);
    }

    // loop through the aList -> for hello world
    for (let j = this.aList.length - 2; j > -1; j--) {
      this.finalList.push(this.aList[j]);
    }
  }
}
