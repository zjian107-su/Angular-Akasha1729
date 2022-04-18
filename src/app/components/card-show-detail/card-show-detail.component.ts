import { Component, OnInit } from '@angular/core';
import { Post, User } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-show-detail',
  templateUrl: './card-show-detail.component.html',
  styleUrls: ['./card-show-detail.component.css'],
})
export class CardShowDetailComponent implements OnInit {
  userList: User[] = [];
  postList: Post[] = [];

  constructor(private cs: CardService) {}

  ngOnInit(): void {
    this.cs.getPosts().subscribe({
      next: (posts) => {
        this.postList = posts;
      },
    });

    this.cs.getUsers().subscribe({
      next: (users) => {
        this.userList = users;
      },
    });
  }
}
