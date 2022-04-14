import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-http-user-list',
  templateUrl: './http-user-list.component.html',
  styleUrls: ['./http-user-list.component.css'],
})
export class HttpUserListComponent implements OnInit {
  userList: User[] = [];
  signupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['daniel@gmail.com', [Validators.required, Validators.email]],
    website: ['apple.com', [Validators.required]],
  });

  constructor(private us: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.us.getUsers().subscribe({
      next: (data: User[]) => {
        this.userList = data;
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.userList.push(this.signupForm.value);
  }
}
