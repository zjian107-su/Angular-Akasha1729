import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  email: FormControl<any> = new FormControl('');
  password: FormControl<string | null> = new FormControl('');
  state: FormControl<string | null> = new FormControl('');
  country: FormControl<string | null> = new FormControl('');

  ngOnInit() {
    this.email.setValue('daniel@gamil.com');
    this.password.setValue('12345');
    this.state.setValue('CA');
    this.country.setValue('USA');
  }

  submit() {
    console.log('submit');
    console.log('email', this.email.value);
    console.log('password', this.password.value);
    console.log('state', this.state.value);
    console.log('country', this.country.value);
  }
}
