import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { InstagramFeed } from '../models/instagramfeed';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InstagramFeedService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private picturesUrl = 'https://mycityservice.azurewebsites.net/pictures';  // URL to web api

    constructor(private http: Http) { }

    getPictures(id: string): Promise<InstagramFeed[]> {
        const url = `${this.picturesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as InstagramFeed[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}