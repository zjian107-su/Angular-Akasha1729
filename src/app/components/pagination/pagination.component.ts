import { Component, OnInit } from '@angular/core';
import { data } from '../../constants';
import { Book } from '../../interfaces';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  data: Book[] = data;
  currentData: Book[] = [];
  page: number = 1;

  PAGESIZE: number = 10;
  pageList: number[] = [];

  getBookDetails(data: Book[], currentPage: number = 1) {
    const pages = Math.ceil(this.data.length / this.PAGESIZE);
    this.pageList = Array.from({ length: pages }, (_, i) => i + 1);
    this.page = currentPage;
    this.currentData = this.data.slice(
      (currentPage - 1) * this.PAGESIZE,
      currentPage * this.PAGESIZE
    );
  }

  clickPage(page: number) {
    this.getBookDetails(this.data, page);
  }

  isCurrentPage(pageNumber: number) {
    return pageNumber === this.page;
  }

  ngOnInit() {
    this.getBookDetails(this.data);
  }
}
