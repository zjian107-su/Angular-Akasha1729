import { Component } from '@angular/core';
import Plan from './interfaces/plans';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
})
export class PlansComponent {
  plans: Plan[] = [
    {
      id: '0',
      text: 'plan A',
      price: 5,
    },
    {
      id: '1',
      text: 'plan B',
      price: 10,
    },
    {
      id: '2',
      text: 'plan C',
      price: 15,
    },
  ];

  onClick(index: number) {
    [this.plans[index], this.plans[1]] = [this.plans[1], this.plans[index]];
  }
}
