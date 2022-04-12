import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() parentValue01 = '';
  @Output() chanegValue = new EventEmitter();

  onClick() {
    this.chanegValue.emit('childValue 01');
  }
}
