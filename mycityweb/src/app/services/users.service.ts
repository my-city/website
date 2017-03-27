import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'https://mycityservice.azurewebsites.net/users';  // URL to web api

  constructor(private http: Http) { }

  saveUser(user: any) {
      const url = `${this.usersUrl}`;
      return this.http.post(url, JSON.stringify(user))
      //.toPromise()
      //.then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
