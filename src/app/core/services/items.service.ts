import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/items`);
  }

  getItem(id: number): Observable<Item> {
    // const item = this.items.find(item => item.id === id);
    // return of(item);
    return this.http.get<Item>(`${this.url}/items/${id}`);
  }
}
