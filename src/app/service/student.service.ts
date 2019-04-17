import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public httpclient : HttpClient) { }
  getData (){
    return this.httpclient.get('../assets/student.json').toPromise();
     }
}
