import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvoserviceService {

  constructor(
    public httpclient : HttpClient
  ) {}
   
    getdata() {
  return   this.httpclient.get("../../../assets/evo.json").toPromise();
    }


}
