import { Component, Input } from '@angular/core';
import { Tab } from '../../interfaces';

/***
 * It should automatically generate the tabs based on the tab object
 * When you click on the tab, it should show the content of the tab. Eventually it will become a drop down
 *
 * Scenerio 1:
 * Campuses:
 *    EF Academy
 *    AJ Academy
 *
 * Activities:
 *     Skating
 *         Ice Skate
 *             Lake Rink
 *             Artificial Rink
 *         Roller Skate
 */

@Component({
  selector: 'app-nested-nav',
  templateUrl: './nested-nav.component.html',
  styleUrls: ['./nested-nav.component.css'],
})
export class NestedNavComponent {
  @Input() childrenTab: Tab[] = [];

  ngOnInit() {
    console.log(this.childrenTab);
  }

  toggleActive(i: number) {
    this.childrenTab[i].isActive = !this.childrenTab[i].isActive;
  }
}
