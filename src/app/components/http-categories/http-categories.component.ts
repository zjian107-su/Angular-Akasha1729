import { Category } from './../../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-http-categories',
  templateUrl: './http-categories.component.html',
  styleUrls: ['./http-categories.component.css'],
})
export class HttpCategoriesComponent implements OnInit {
  categoryList: string[] = [];
  dataStorage: Array<Array<string>> = Array.from({ length: 26 }, () => []);

  constructor(private cs: CategoryService) {}

  ngOnInit() {
    this.cs.getCategories().subscribe({
      next: (data) => {
        this.categoryList = data.categories;
        this.dataStorage = this.storeData();
      },
    });
  }

  storeData() {
    console.log('storeData');
    let res: Array<Array<string>> = Array.from({ length: 26 }, () => []);
    for (let category of this.categoryList) {
      let index = category.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
      res[index].push(category);
    }
    return res;
  }

  getLetter(index: number): string {
    let transformedIndex = index + 'a'.charCodeAt(0);
    return String.fromCharCode(transformedIndex);
  }
}
