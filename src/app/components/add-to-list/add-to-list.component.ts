import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css'],
})
export class AddToListComponent {
  todoItem: string = '';

  todoList: string[] = [];

  addToList(): void {
    this.todoList.push(this.todoItem);
    this.todoItem = '';
  }
}
