import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/items`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/items/${id}`);
  }

  saveItem(id: number): Observable<Item> {
    const item = {
      'name': `pala`,
      'description': 'Es una pala estratosférica',
      'price': 9.99,
      'currency': 'USD',
      'available': true,
      'img': 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
    };
    return this.http.post<Item>(`${this.url}/items`, item);
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.url}/items/${id}`);
  }

  modifyItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.url}/items/${item.id}`, item);
  }
}
