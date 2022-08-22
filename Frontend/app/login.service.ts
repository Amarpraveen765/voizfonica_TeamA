import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:9001/login/';
  private baseUrl2 = 'http://localhost:8999/login/Updatepass';
  private baseUrl3 = 'http://localhost:8999/email/sendotp';
  private baseUrl4 = 'http://localhost:8999/service/';
  private baseUrl5 = 'http://localhost:8999/login/Updateuser';
  private baseUrl6 = 'http://localhost:8999/login/Updatemail';
  private baseUrl7 = 'http://localhost:9003/contact/';

  constructor(private http: HttpClient) { }
  
  loginValidation(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + 'getclient');

  }

  signupData(Data: object): Observable<object> {

    return this.http.post(`${this.baseUrl}` + 'addclient', Data);

  }

  forgotpassword(id: any, data: any): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}/${data}`);
  }

  sendotp(otp: any, to: any): Observable<any> {
    return this.http.get(`${this.baseUrl3}/${otp}/${to}`);
  }

  //My Profile
  changeuser(id: any, data: any): Observable<any> {
    return this.http.get(`${this.baseUrl5}/${id}/${data}`);
  }
  
  changemail(id: any, data: any): Observable<any> {
    return this.http.get(`${this.baseUrl6}/${id}/${data}`);
  }

  //To Post Quries 
  postquerys(Data: object): Observable<object> {

    return this.http.post(`${this.baseUrl7}` + 'addquery', Data);

  }

  

}