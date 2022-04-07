import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css'],
})
export class InterviewFormComponent {
  userList: User[] = [];

  firstName: FormControl = new FormControl('Daniel');
  lastName: FormControl = new FormControl('Jiang');
  email: FormControl = new FormControl('daniel@gmail.com');
  age: FormControl = new FormControl('25');

  // submit form
  // 1. total check for validation
  // 2. once that is true, we save the data into the list
  onSubmit() {
    console.log('submit!');
    this.pushData();
    this.clearForm();
  }

  // push data
  pushData() {
    this.userList.push({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      age: this.age.value,
    });
  }

  clearForm(): void {
    this.firstName.reset();
    this.lastName.reset();
    this.email.reset();
    this.age.reset();
    //  form.resetForm(); -> ngForms
    // this.signupForm.reset(); -> reactive forms
  }

  // check everything
  totalCheck(): boolean {
    if (
      this.firstName.value != null &&
      this.firstName.value != null &&
      this.firstName.value != null &&
      this.firstName.value != null &&
      this.checkEmail(this.email)
    ) {
      return true;
    }
    return false;
  }

  checkEmail(email: FormControl): boolean {
    if (email.value.includes('@')) {
      return true;
    }
    return false;
  }

  delete(user: User): void {
    console.log('delete');
    for (let i = 0; i < this.userList.length; i++) {
      if (user.email == this.userList[i].email) {
        this.userList = [
          ...this.userList.slice(0, i),
          ...this.userList.slice(i + 1, this.userList.length),
        ];
      }
    }
  }
}
