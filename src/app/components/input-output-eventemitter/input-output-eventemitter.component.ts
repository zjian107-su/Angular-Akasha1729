import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output-eventemitter',
  templateUrl: './input-output-eventemitter.component.html',
  styleUrls: ['./input-output-eventemitter.component.css'],
})
export class InputOutputEventemitterComponent {
  parentValue01 = 'parent value 01';
  parentValue02 = 'parent value 02';

  changeValue(newValue: string) {
    this.parentValue02 = newValue;
  }
}
