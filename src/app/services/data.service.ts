import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  appiAddress: string;

  constructor(private _http: HttpClient) {
    this.appiAddress = 'https://jsonplaceholder.typicode.com/users'
   }

  getData(): Observable<Array<User>> {
    return this._http.get<Array<User>>(this.appiAddress);
  }
}
