import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeListComponent } from './components/palindrome-list/palindrome-list.component';
import { CityFilterComponent } from './components/city-filter/city-filter.component';
import { FormsModule } from '@angular/forms';
import { AddToListComponent } from './components/add-to-list/add-to-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterAutoIncrementComponent } from './components/counter-auto-increment/counter-auto-increment.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeListComponent,
    CityFilterComponent,
    AddToListComponent,
    CounterComponent,
    CounterAutoIncrementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
