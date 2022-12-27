import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private _url:string='http://localhost:8081/book-api/books';

  getBooks=():Observable<Book[]>=>{
    return this._httpClient.get<Book[]>(this._url);
  }

  constructor(private _httpClient:HttpClient) { }

  // getData(){
  //   return this._httpClient.get()
  // }
}
