import { Component, Input } from '@angular/core';
import { Nav } from '../data';

@Component({
  selector: 'app-clean-recursive-nav-child',
  templateUrl: './clean-recursive-nav-child.component.html',
  styleUrls: ['./clean-recursive-nav-child.component.css'],
})
export class CleanRecursiveNavChildComponent {
  @Input() data: Nav[] = [];

  toggleExpand(item: Nav) {
    item.expanded = !item.expanded;
  }
}
