import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      'https://openlibrary.org/subjects/world.json'
    );
  }
}
