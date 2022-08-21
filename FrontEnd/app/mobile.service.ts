import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  @Input() public result : Array <any> = [];
  private baseUrl = 'http://localhost:9004/';
  constructor(private http:HttpClient) { }
  getPlans(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'getPlans');  //will change ...As Per ordermanagement

  }
  getBroadbandPlans(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'getBroadbandPlans');  //will change ...As Per ordermanagement

  }
  updateUser(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}update/${id}`);

  }

  httpGet(url: string) {
    return this.http.get(url);
  }

  httpPost(url: string, {}: any) {
    return this.http.post(url, { name: "Subrat" });
  }

  sendEmail(email: string) {
    return this.http.get(`${this.baseUrl}sendMail/${email}`);
  }
}
