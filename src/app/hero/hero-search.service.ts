import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    const searchUrl = `api/heroes/?name=${term}`;

    return this.http
      .get(searchUrl)
      .map(response => response.json().data as Hero[]);
  }

}
