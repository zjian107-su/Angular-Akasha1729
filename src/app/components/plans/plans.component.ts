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

  onClick(plan: Plan, index: number) {
    // 1. pass in the plan object that is clicked
    // 2. save the middle plan of the current "this.plan" as a temp
    // 3. swap between the clicked plan and temp

    // senerio 01
    // 0 1 2: click on id 0 -> 1 0 2
    // 1 0 2: click on id 0 -> 1 0 2
    // 1 0 2: click on id 2 -> 1 2 0

    let temp = this.plans[1];

    // when click on the first item
    if (index == 0) {
      this.plans[1] = plan;
      this.plans[0] = temp;
    }
    if (index == 2) {
      this.plans[1] = plan;
      this.plans[2] = temp;
    }
  }
}
