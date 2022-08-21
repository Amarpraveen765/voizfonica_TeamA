import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
import Swal from 'sweetalert2'
// import {SharedataService} from '../sharedata.service'
// import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  to:any;
  id:any;
  OTP:any;
  hide:boolean = true;
  changetype:boolean = true;
  hide2:boolean = true;
  changetype2:boolean = true;

  //variables for my profile access
  usernam:any;
  passwor :any;
  emai :any;
  mobinum :any;
  


  constructor(private loginService: LoginService,private http: HttpClient,private router:Router){}
  ngOnInit(): void {
  }

  // Login:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  

  // Login:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  formuse = new FormGroup({
    mobilenumber2: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password2: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])

  });

  get f() {
    return this.formuse.controls
  }

  signin() {
    //start
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const customer = res.find((a:any)=>{if(a.mobilenumber === this.formuse.value.mobilenumber2){sessionStorage.setItem('names', a.username),sessionStorage.setItem('num', a.mobilenumber)}
        return a.mobilenumber === this.formuse.value.mobilenumber2 && a.password === this.formuse.value.password2
      });
      if(customer)
      {
        localStorage.setItem('customer',customer.mobilenumber)
        
        // this.sharedata.setMessage(this.usernam)
        console.log(this.usernam)
        Swal.fire({
          title: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Close'
        })
        this.formuse.reset();
        this.router.navigate(['home'])
      }
      else{
        Swal.fire({
          title: 'User not Found',
          text: 'Wrong Mobile number or Password',
          icon: 'error',
          confirmButtonText: 'Close'
        })
        this.formuse.reset();
      }
    },err=>{
      alert('something went wrong')
    
    })
  }


  // Signup::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // Signup::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  formValue = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
    email: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$")]),
    mobilenumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    otp: new FormControl('', [Validators.required, Validators.pattern('(\\d{4})')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])

  });

  get f1() {
    return this.formValue.controls
  }

  // for mobile number::::::::::::::::::::::
  validation2(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob1 = res.find((b:any)=>{
        return b.mobilenumber === this.formValue.value.mobilenumber
      },);
      if(mob1)
      {
        Swal.fire({
          title: 'Mobile number Registered with another account',
          text: 'Check the Number or Try Password Reset',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      else{
        this.validation3();        
      }
    },err=>{
      alert("something went wrong")
    
    })
  }
  // for Email:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  validation3(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob2 = res.find((c:any)=>{
        return c.email === this.formValue.value.email
      },);
      if(mob2)
      {
        Swal.fire({
          title: 'Email Registered with another account',
          text: 'Check the Email or Try Password Reset',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      else{
        this.validation4();        
      }
    },err=>{
      alert("something went wrong")
    
    })
  }
  validation4(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob2 = res.find((c:any)=>{
        return c.username === this.formValue.value.username
      },);
      if(mob2)
      {
        Swal.fire({
          title: 'Username taken',
          text: 'Try another username',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      else{
        this.random2();        
      }
    },err=>{
      alert("something went wrong")
    
    })
  }

  //OTP genteration 2::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  randomIntFromInterval2() { 
    return Math.floor(Math.random() * (9999 -  + 1000) + 1000)
  }
  
  random2(){
  const rndInt = this.randomIntFromInterval2()
  console.log(rndInt)
  this.OTP=rndInt;
  this.otpalert2();
  }

  otpalert2(){
    Swal.fire({
      title: 'OTP is Generated Succefully and sent to your Registered Email',
      icon: 'success',
      confirmButtonText: 'Close'
    })
    this.sendmail2();
  }

  //Email send:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  sendmail2() {
    this.loginService.sendotp(this.OTP,this.f1['email'].value)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  signup() {

    this.user.username = this.f1['username'].value;
    this.user.email = this.f1['email'].value;
    this.user.password = this.f1['password'].value;
    this.user.mobilenumber = this.f1['mobilenumber'].value;
    this.user.otp = this.f1['otp'].value;

    if(this.user.otp === this.OTP ){
      this.posttdata();
      this.alert1();
      this.formValue.reset();
    }
    else{
      Swal.fire({
        title: 'OTP donot match',
        text: 'Check the OTP and Try Again',
        icon: 'warning',
        confirmButtonText: 'Close'
      })
    }
  }

  alert1(){
    Swal.fire({
      title: 'Succefully Signed Up',
      text: 'Thankyou for Joining us',
      icon: 'success',
      confirmButtonText: 'Close'
    }).then((result)=>{
      if(result.value){
        this.router.navigate(['home'])
      }
    })
    
  }
  
  posttdata() {
    this.loginService.signupData(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  sclose(){
    this.formValue.reset();
  }


  //forgot password:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //forgot password:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  
  forgot = new FormGroup({
    mobilenumber3: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    otp2: new FormControl('', [Validators.required, Validators.pattern('(\\d{4})')]),
    password3: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    repassword: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])

  });

  get f2() {
    return this.forgot.controls
  }

  // for user to change password
  validation(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob = res.find((a:any)=>{if(a.mobilenumber === this.forgot.value.mobilenumber3){this.to=a.email,this.id=a.id}
        return a.mobilenumber === this.forgot.value.mobilenumber3
      });
      if(mob)
      {
        this.random();
      }
      else{
        Swal.fire({
          title: 'Number not in database',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
    },err=>{
      alert("something went wrong")
    
    })

  }
  
  //OTP::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  randomIntFromInterval() { 
    return Math.floor(Math.random() * (9999 -  + 1000) + 1000)
  }
  
  random(){
  const rndInt = this.randomIntFromInterval()
  console.log(rndInt)
  this.OTP=rndInt;
  this.otpalert();
  }

  otpalert(){
    Swal.fire({
      title: 'OTP is Generated Succefully and sent to your Registered Email',
      icon: 'success',
      confirmButtonText: 'Close'
    })
    this.sendmail();
  }

  //Email send:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  sendmail() {
    this.loginService.sendotp(this.OTP,this.to)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  forgotpas() {
    this.user.mobilenumber3 = this.f2['mobilenumber3'].value;
    this.user.otp2 = this.f2['otp2'].value;
    this.user.password3 = this.f2['password3'].value;
    this.user.repassword = this.f2['repassword'].value;

    // to check the password and Otp:::::::::::
    if(this.user.otp2 === this.OTP ){
      if(this.user.password3 === this.user.repassword){
        this.postdata();
        this.alert2();
        this.forgot.reset();
      }else{
        Swal.fire({
          title: 'Try Again! Passwords donot match',
          text: 'Both Password Should be the Same ',
          icon: 'warning',
          confirmButtonText: 'Close'
        })
      }
    }
    else{
      Swal.fire({
        title: 'OTP donot match',
        text: 'Check the OTP and Try Again',
        icon: 'warning',
        confirmButtonText: 'Close'
      })
    }
  }

  alert2(){
    Swal.fire({
      title: 'Password Successfully changed',
      text: 'Do you want to continue',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Login',
      cancelButtonText: 'Close'
    }).then((result)=>{
      if(result.value){
        this.router.navigate(['home'])
      }else if(result.dismiss === Swal.DismissReason.cancel) {}
  })
}

  postdata() {
    this.loginService.forgotpassword(this.id,this.user.password3)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  pclose(){
    this.forgot.reset();
  }
  
  //Disable items::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  

  //Hide Password::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  viewpass(){
    this.hide = !this.hide
    this.changetype = !this.changetype
  }
  viewpass2(){
    this.hide2 = !this.hide2
    this.changetype2 = !this.changetype2
  }

 

}