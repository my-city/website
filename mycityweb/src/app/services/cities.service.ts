import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from '../models/city';

@Injectable()
export class CitiesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private citiesUrl = 'https://mycityservice.azurewebsites.net/cities';  // URL to web api

  constructor(private http: Http) { }

  getCities(): Promise<City[]> {
      return this.http.get(this.citiesUrl)
               .toPromise()
          .then(response => response.json() as City[])
               .catch(this.handleError);
  }


  getCity(id: string): Promise<City> {
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
        .then(response => response.json().data as City)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
