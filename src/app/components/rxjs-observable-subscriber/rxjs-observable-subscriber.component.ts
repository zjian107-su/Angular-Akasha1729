import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-observable-subscriber',
  templateUrl: './rxjs-observable-subscriber.component.html',
  styleUrls: ['./rxjs-observable-subscriber.component.css'],
})
export class RxjsObservableSubscriberComponent {
  simpleObservale = new Observable((subscriber) => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
  });

  simpleObservableSubscription01 = this.simpleObservale.subscribe({
    // next: (value) => console.log(value),
    // error: (err) => console.log(err),
    // complete: () => console.log('complete'),
  });

  simpleObservableSubscription02 = this.simpleObservale
    .subscribe
    // (value) => console.log(value),
    // (err) => console.log(err),
    // () => console.log('complete')
    ();
}
