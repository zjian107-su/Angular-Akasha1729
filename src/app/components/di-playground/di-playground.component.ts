import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-di-playground',
  templateUrl: './di-playground.component.html',
  styleUrls: ['./di-playground.component.css'],
})
export class DiPlaygroundComponent {
  constructor(public myServiceService: MyServiceService) {}
  tempName: string = '';

  ngOnInit(): void {
    console.log('init Daniel');
    this.myServiceService.print();
  }

  componentChangeName(): void {
    if (this.tempName === '') {
      alert("Name can't be empty");
      return;
    }
    this.myServiceService.changeName(this.tempName);
    this.tempName = '';
    this.myServiceService.print();
  }
}
