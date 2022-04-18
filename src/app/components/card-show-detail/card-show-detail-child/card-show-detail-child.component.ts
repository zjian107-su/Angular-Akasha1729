import { Component, Input, OnInit } from '@angular/core';
import { Post, User } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card-show-detail-child',
  templateUrl: './card-show-detail-child.component.html',
  styleUrls: ['./card-show-detail-child.component.css'],
})
export class CardShowDetailChildComponent implements OnInit {
  @Input() data: Post[] = [];
  @Input() user: User = { name: '', id: 0 };
  isExpanded: boolean = false;
  postsDetail: Post[] = [];

  ngOnInit() {
    this.postsDetail = this.data.filter((post) => {
      return post.userId === this.user.id;
    });
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
