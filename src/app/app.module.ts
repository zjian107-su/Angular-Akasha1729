import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeListComponent } from './components/palindrome-list/palindrome-list.component';
import { CityFilterComponent } from './components/city-filter/city-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PalindromeListComponent, CityFilterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
