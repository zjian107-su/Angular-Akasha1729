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

  signupForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
  });

  ngOnInit() {
    this.signupForm.patchValue({
      email: '',
      password: '',
      state: '',
      country: '',
    });
  }

  submit() {
    console.log(this.signupForm.value);
  }
}
