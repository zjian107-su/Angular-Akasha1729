import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from './../../services/book.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-title-and-author',
  templateUrl: './filter-title-and-author.component.html',
  styleUrls: ['./filter-title-and-author.component.css'],
})
export class FilterTitleAndAuthorComponent implements OnInit {
  bookList: Book[] = [];
  tempBook: Book[] = [];
  query: FormControl = new FormControl('Gun');

  constructor(private bs: BookService) {}

  ngOnInit() {
    this.bs.getBooks().subscribe({
      next: (data) => {
        this.bookList = data.works;
        this.tempBook = data.works;
      },
    });
  }

  onChange() {
    this.tempBook = this.bookList.filter((book) => {
      return (
        book.title.toLowerCase().includes(this.query.value.toLowerCase()) ||
        book.authors.some((author) => {
          return author.name
            .toLowerCase()
            .includes(this.query.value.toLowerCase());
        })
      );
    });
  }
}
