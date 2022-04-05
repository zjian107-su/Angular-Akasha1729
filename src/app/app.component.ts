import { Component } from '@angular/core';
import { tabs } from './constants';
import { Tab } from './interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular-Interview-Exercises';
  devMode = true;
  tabs: Tab[] = tabs;
}
