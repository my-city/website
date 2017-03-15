import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from '../models/city';

@Injectable()
export class CitiesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private citiesUrl = 'api/cities';  // URL to web api

  constructor(private http: Http) { }

  getCities(): Promise<City[]> {
      return this.http.get(this.citiesUrl)
               .toPromise()
          .then(response => response.json().data as City[])
               .catch(this.handleError);
  }


  getHero(id: number): Promise<City> {
      const url = `${this.citiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
        .then(response => response.json().data as City)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
      const url = `${this.citiesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<City> {
    return this.http
        .post(this.citiesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: City): Promise<City> {
      const url = `${this.citiesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
