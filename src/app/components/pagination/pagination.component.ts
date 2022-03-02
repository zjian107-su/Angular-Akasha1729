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
  data: Book[] = Array.from({ length: 22 }, (v, k) => {
    return {
      title: `Book ${k + 1}`,
      authors: [`Author ${k + 1}`],
    };
  });
}
