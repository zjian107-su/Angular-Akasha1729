import { data } from './data';
import { Component, OnInit } from '@angular/core';
import fetch, { Nav } from './data';

@Component({
  selector: 'app-clean-recursive-nav',
  templateUrl: './clean-recursive-nav.component.html',
  styleUrls: ['./clean-recursive-nav.component.css'],
})
export class CleanRecursiveNavComponent implements OnInit {
  data: Nav[] = [];

  ngOnInit(): void {
    fetch().then((data) => {
      this.data = data;
    });
  }
}
