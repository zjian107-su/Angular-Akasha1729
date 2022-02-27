import { Component } from '@angular/core';

interface Book {
  title: string;
  authors: string[];
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  PAGE_SIZE = 5;
  data: Book[] = Array.from({ length: 22 }, (v, k) => {
    return {
      title: `Book ${k + 1}`,
      authors: [`Author ${k + 1}`],
    };
  });
  list: any[] = [];
  page = 1;
  pageList: number[] = [];
  queryString = '';

  constructor() {
    this.getPaginationDetail(this.data);
  }

  clickHandler(page: number) {
    this.getPaginationDetail(this.data, page);
  }

  changeHandler() {
    const filteredData = this.data.filter(
      (book) =>
        book.title.toLowerCase().includes(this.queryString.toLowerCase()) ||
        book.authors.find((author) =>
          author.toLowerCase().includes(this.queryString.toLowerCase())
        )
    );
    this.getPaginationDetail(filteredData);
  }

  getPaginationDetail(list: any[], currentPage = 1) {
    const pages = Math.ceil(list.length / this.PAGE_SIZE);
    this.pageList = Array.from({ length: pages }, (_, i) => i + 1);
    this.page = currentPage;
    this.list = list.slice(
      this.PAGE_SIZE * (currentPage - 1),
      this.PAGE_SIZE * currentPage
    );
  }
}
