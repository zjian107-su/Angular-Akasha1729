import { Component, OnDestroy } from '@angular/core';

/**
 * Scenerio 1:
 * 1. first view => "Load Page" button
 * 2. second 0 - 3 => first 3 seconds, it will show a page with context of "The page is loading..."
 * 3. second 3 - 10 => change the view as "The page is still
  loading..." 
 * 4. after second 10 => content changes to "Fake page"
 */

/*
Variables
1. count => second
2. timer
*/

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css'],
})
export class LoadingPageComponent implements OnDestroy {
  count: number = 0;
  starCount: boolean = false;
  timer: any;
  message = '';
  content = 'interview content';

  // button function
  onClick() {
    // prevent multiple timer
    this.starCount = true;
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.count = this.count + 1;
      if (this.count <= 3) {
        this.message = 'The page is loading...';
      } else if (this.count > 3 && this.count <= 10) {
        this.message = 'The page is still loading...';
      } else if (this.count > 10) {
        this.message = this.content;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
