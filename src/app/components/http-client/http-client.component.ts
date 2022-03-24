import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
  providers: [HttpClient],
})
export class HttpClientComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts: Post[] = [];
  displayedPosts: Post[] = [];

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
        this.displayedPosts = this.posts.slice(0, 10);
        console.log(this.posts);
      });
  }
}
