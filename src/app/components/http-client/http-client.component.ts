import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
  searchedPosts: Post[] = [];

  filterString: FormControl = new FormControl();

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
        this.displayedPosts = this.posts.slice(0, 10);
        this.searchedPosts = this.displayedPosts;
        console.log(this.posts);
      });

    this.filterString.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((newFilterString) => {
        console.log('valueChanges!');
        console.log(newFilterString);
        this.search(newFilterString);
      });
  }

  search(filterString: string) {
    if (this.searchedPosts.length != 0) this.searchedPosts = [];
    this.searchedPosts = this.displayedPosts.filter((post) => {
      return (
        post.title.includes(filterString) || post.body.includes(filterString)
      );
    });
  }
}
