import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  @Input() public result : Array <any> = [];
  private baseUrl = 'http://localhost:9004/';
  private baseUrl1 = 'http://localhost:9001/login/';
  constructor(private http:HttpClient) { }
  getPlans(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'getPlans');  //will change ...As Per ordermanagement

  }
  addMobilePlans(mobile: object): Observable<any> {

    return this.http.post(`${this.baseUrl}`+'addPlans', mobile); //will change ...As Per ordermanagement

  }
  addBroadbandPlans(broadband: object): Observable<any> {

    return this.http.post(`${this.baseUrl}`+'addBroadbandPlans', broadband); //will change ...As Per ordermanagement

  }
  getBroadbandPlans(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'getBroadbandPlans');  //will change ...As Per ordermanagement

  }
  deleteBroadbandPlan(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteBroadbandPlans/${id}`, { responseType: 'text' });

  }
  deletePlan(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deletePlans/${id}`, { responseType: 'text' });

  }
  getUsers(): Observable<any> {

    return this.http.get(`${this.baseUrl1}`+'getclient');  //will change ...As Per ordermanagement

  }
  addUsers(user: object): Observable<any> {

    return this.http.post(`${this.baseUrl1}`+'addclient', user); //will change ...As Per ordermanagement

  }
  deleteUsers(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl1}deleteUsers/${id}`, { responseType: 'text' });

  }
  sendEmail(email: string) {
    return this.http.get(`${this.baseUrl}sendMail/${email}`);
  }
  updateUsers(id:number,usertype: String){
    return this.http.get(`${this.baseUrl1}updateUser/${id}/${usertype}`);
  }

}
