import { Component } from '@angular/core';
import { palindromeList } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular-Interview-Exercises';
  panlindomeList: string[] = palindromeList;

  isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
  }
}
