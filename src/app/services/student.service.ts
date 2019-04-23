import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public httpclient: HttpClient) { }

  private authorizationHeader() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiLguJ7guLTguKEiLCJsYXN0bmFtZSI6IuC4nuC4oyIsImVtYWlsIjoicGltQGdtYWlsLmNvbSIsInByb2ZpbGVJbWFnZVVSTCI6IiIsInJvbGVzIjpbImhlYWR0ZWFjaGVyIl0sIm9uZXNpZ25hbGlkcyI6W10sImNyZWF0ZWQiOiIyMDE5LTAzLTEzVDAyOjA2OjU5LjcwNVoiLCJfaWQiOiI1Yzg4NjVjMzMxZjBmMzAwMTNkYmUyMzciLCJ1c2VybmFtZSI6InBpbSIsImNpdGl6ZW5pZCI6IjExNzA2MDAxNzc3NzYiLCJzY2hvb2xpZCI6IjVjODc4MWE5MTIxMjRjMDAxMzUxYTg0MSIsInByb3ZpZGVyIjoibG9jYWwiLCJkaXNwbGF5bmFtZSI6IuC4nuC4tOC4oSDguJ7guKMiLCJfX3YiOjAsImxvZ2luVG9rZW4iOiIifQ.v5MmcILpGsWatGCk6_aorMw-dCobl4m7QEi5O-sAC5s"
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getStudentById(body) {
    return this.httpclient.post(environment.apiUrl + '/api/student-yeartermclassclassroom', body, { headers: this.authorizationHeader() }).toPromise();
  }

  getData() {
    return this.httpclient.get('../assets/student.json').toPromise();
  }


}
