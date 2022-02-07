import { Component } from '@angular/core';
import { cityList } from 'src/app/constants';

@Component({
  selector: 'app-city-filter',
  templateUrl: './city-filter.component.html',
  styleUrls: ['./city-filter.component.css'],
})
export class CityFilterComponent {
  cityList: string[] = cityList;
  finalList: string[] = [];
  filterString: string = '';

  filterList(): void {
    this.finalList = [];
    cityList.filter((city) => {
      if (city.toLowerCase().includes(this.filterString.toLowerCase())) {
        this.finalList.push(city);
      }
    });
  }
}
