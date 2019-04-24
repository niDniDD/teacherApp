import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public httpclient: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('@token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getStudentById(body) {
    return this.httpclient.post(environment.apiUrl + '/api/student-yeartermclassclassroom', body, { headers: this.authorizationHeader() }).toPromise();
  }

  getPortfolio(body) {
    return this.httpclient.post(environment.apiUrl + '/api/portfolio-condition', body, { headers: this.authorizationHeader() }).toPromise();
  }

  getData() {
    return this.httpclient.get('../assets/student.json').toPromise();
  }

  getRoom(body){
    return this.httpclient.post(environment.apiUrl + '/api/staff-getroom', body, { headers: this.authorizationHeader()}).toPromise();
  }

}
