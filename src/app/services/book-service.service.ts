import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private _url:string='http://localhost:8081/book-api';

  getBooks=():Observable<Book[]>=>{
    return this._httpClient.get<Book[]>(`${this._url}/books`);
  }
  getPages=(pageNumber:number,pageSize:number):Observable<Book[]>=>{
    return this._httpClient.get<Book[]>(`${this._url}/pagination/${pageNumber}/${pageSize}`);
  }
  getBookById=(id:number):Observable<Book[]>=>{
    return this._httpClient.get<Book[]>(`${this._url}/getById/id/${id}`);
   }

  saveBook=(book:Book):Observable<Book[]>=>{
    return this._httpClient.post<Book[]>(`${this._url}/addBook`,book);
  }

  updateBook=(book:Book):Observable<Book[]>=>{
    return this._httpClient.put<Book[]>(`${this._url}/updateBook`,book);
  }

  deleteBook=(id:number):Observable<Book[]>=>{
    return this._httpClient.delete<Book[]>(`${this._url}/deleteBook/id/${id}`);
  }

  ascSorting=(field:string):Observable<Book[]>=>{
    return this._httpClient.get<Book[]>(`${this._url}/AscSortBy/${field}`);
  }

  descSorting=(field:string):Observable<Book[]>=>{
    return this._httpClient.get<Book[]>(`${this._url}/DescSortBy/${field}`);
  }

  constructor(private _httpClient:HttpClient) { }
}
