import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: Http) { }

// register
signup(obj) {
   const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:2000/users/register', obj, { headers: headers });

}

// login
login(valid) {
const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post('http://localhost:2000/users/login', valid, {headers: headers });
}

// userslist
users() {
  return this.http.get('http://localhost:2000/users');
}

}
