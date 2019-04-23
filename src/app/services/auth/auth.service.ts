import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('@token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  onSignin(body) {
    return this.http.post(environment.apiUrl + '/api/auth/signin', body).toPromise()
  }

  getUser() {
    return this.http.get(environment.apiUrl + '/api/user-school', { headers: this.authorizationHeader() }).toPromise()
  }
}
