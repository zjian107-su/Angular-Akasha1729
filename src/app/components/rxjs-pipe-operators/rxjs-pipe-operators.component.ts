import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-pipe-operators',
  templateUrl: './rxjs-pipe-operators.component.html',
  styleUrls: ['./rxjs-pipe-operators.component.css'],
})
export class RxjsPipeOperatorsComponent implements OnInit {
  numbers$ = of(1, 2, 3, 4, 5);

  constructor() {}

  ngOnInit(): void {
    this.numbers$
      .pipe(
        filter((val) => val % 2 === 0),
        map((val) => val * 2)
      )
      .subscribe((val) => console.log(val));
  }
}
