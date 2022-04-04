import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-pipe-operators',
  templateUrl: './rxjs-pipe-operators.component.html',
  styleUrls: ['./rxjs-pipe-operators.component.css'],
})
export class RxjsPipeOperatorsComponent implements OnInit {
  numbers$ = of(1, 2, 3, 4, 5);
  processedNumbers: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.numbers$
      .pipe(
        filter((val) => val % 2 === 0),
        map((val) => val * 2),
        toArray()
      )
      .subscribe((val) => (this.processedNumbers = val));
  }
}
