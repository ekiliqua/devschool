import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


class Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

class AbstractPagination<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}

class People extends AbstractPagination<Person> {
}
class Films extends AbstractPagination<FilmRow> {
}

class FilmRow {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {
  }

  getSWPeople<People>(): Observable<People> {
    return this.http.get<People>('https://swapi.co/api/people/');
  }

  getSWFilms<Films>(): Observable<Films> {
    return this.http.get<Films>('https://swapi.co/api/films/', );
  }
}
