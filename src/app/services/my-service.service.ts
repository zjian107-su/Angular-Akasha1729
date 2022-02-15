import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  name: string = 'Daniel';

  constructor() {}

  print(): void {
    console.log(`your current name is ${this.name}`);
  }

  changeName(name: string): void {
    console.log('Changing name from service');
    this.name = name;
  }
}
