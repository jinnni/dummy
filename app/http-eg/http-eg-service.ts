import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpEgService {
  constructor (private http: Http) {}
  getUser(value) {
    return this.http.get('https://api.github.com/users/'+value)
    .map((res:Response) => res.json());
  }
}
