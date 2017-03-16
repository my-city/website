import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Trail } from '../models/trail';

@Injectable()
export class TrailsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private trailsUrl = 'https://mycityservice.azurewebsites.net/trails';  // URL to web api

  constructor(private http: Http) { }

  getTrails(): Promise<Trail[]> {
      return this.http.get(this.trailsUrl)
               .toPromise()
          .then(response => response.json() as Trail[])
               .catch(this.handleError);
  }


  getTrail(id: string): Promise<Trail> {
      const url = `${this.trailsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
        .then(response => response.json() as Trail)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
