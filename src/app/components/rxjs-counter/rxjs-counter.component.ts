import { Component, OnDestroy } from '@angular/core';
import { Subject, interval, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-counter',
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.css'],
})
export class RxjsCounterComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();
  counter$ = new Subject<number>();
  currentCount: number = 0;

  constructor() {
    this.initializeCounter();
  }

  initializeCounter() {
    // Increment the counter every second
    interval(1000)
      .pipe(
        tap(() => {
          this.currentCount += 1;
          this.counter$.next(this.currentCount);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    // Emite a value to notify the counter to stop
    this.destroy$.next();
    this.destroy$.complete();
  }
}
