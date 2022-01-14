import { Component } from '@angular/core';
import { palindromeList } from '../../constants';

@Component({
  selector: 'app-palindrome-list',
  templateUrl: './palindrome-list.component.html',
  styleUrls: ['./palindrome-list.component.css'],
})
export class PalindromeListComponent {
  panlindomeList: string[] = palindromeList;

  isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
  }
}
