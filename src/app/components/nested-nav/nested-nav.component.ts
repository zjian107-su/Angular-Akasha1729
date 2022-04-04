import { Component } from '@angular/core';
import { tab } from '../../constants';

/***
 * It should automatically generate the tabs based on the tab object
 * When you click on
 *
 */

@Component({
  selector: 'app-nested-nav',
  templateUrl: './nested-nav.component.html',
  styleUrls: ['./nested-nav.component.css'],
})
export class NestedNavComponent {
  tabs: object = tab;

  ngOnInit() {
    console.log(this.tabs);
  }
}
