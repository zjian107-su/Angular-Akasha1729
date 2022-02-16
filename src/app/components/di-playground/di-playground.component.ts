import { Component } from '@angular/core';
import { NameChangeService} from 'src/app/services/name-change.service';

@Component({
  selector: 'app-di-playground',
  templateUrl: './di-playground.component.html',
  styleUrls: ['./di-playground.component.css'],
})
export class DiPlaygroundComponent {
  constructor(public nameChangeService: NameChangeService) {}
  tempName: string = '';

  ngOnInit(): void {
    console.log('init Daniel');
    this.nameChangeService.print();
  }

  componentChangeName(): void {
    if (this.tempName === '') {
      alert("Name can't be empty");
      return;
    }
    this.nameChangeService.changeName(this.tempName);
    this.tempName = '';
    this.nameChangeService.print();
  }
}
