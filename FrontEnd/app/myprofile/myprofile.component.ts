import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';
import { User } from '../user';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  users:any;
  user: User = new User();
  to:any;
  id:any;
  OTP:any;
  hide:boolean = true;
  changetype:boolean = true;
  hide2:boolean = true;
  changetype2:boolean = true;
  usernam1:any;


  constructor(private loginService: LoginService,private http: HttpClient,private router:Router) { 
    this.loginService.loginValidation().subscribe((dat: any) => {
      this.users = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.users);
    })
    this.usernam1 = sessionStorage.getItem('names');
  }

  ngOnInit():void {
  }


  //Change Username:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  changeuser = new FormGroup({
    olduser: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
    newuser: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")])
    
  });

  get f1() {
    return this.changeuser.controls
  }

  changeusername(){
    this.user.olduser = this.f1['olduser'].value;
    this.user.newuser = this.f1['newuser'].value;
    this.validation1();
    
  }
  validation1(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob = res.find((a:any)=>{if(a.username === this.changeuser.value.olduser){this.id=a.id}
        return a.username === this.changeuser.value.olduser
      });
      if(mob)
      {
        this.validation11();
      }
      else{
        Swal.fire({
          title: 'Type the correct Old Username',
          icon: 'error',
        })
      }
    },err=>{
      alert("something went wrong")
    
    })

  }
  validation11(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob = res.find((a:any)=>{
        return a.username === this.changeuser.value.newuser
      });
      if(mob)
      {
        Swal.fire({
          title: 'Username taken',
          text: 'Try another username',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      else{
        Swal.fire({
          title: 'Username Successfully changed',
          text: 'Login again ',
          icon: 'success',
        })
        this.postdata1();
      }
    },err=>{
      alert("something went wrong")
    
    })

  }

  postdata1() {
    this.loginService.changeuser(this.id,this.user.newuser)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  sclose1(){
    this.changeuser.reset();
  }

  //Change email:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  changemail = new FormGroup({
    oldmail: new FormControl('', [Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$")]),
    newmail: new FormControl('', [Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$")])
    
  });

  get f2() {
    return this.changemail.controls
  }

  changeemail(){
    this.user.oldmail = this.f2['oldmail'].value;
    this.user.newmail = this.f2['newmail'].value;
    this.validation2();
    
  }
  validation2(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob1 = res.find((b:any)=>{if(b.email === this.changemail.value.oldmail){this.id=b.id}
        return b.email === this.changemail.value.oldmail
      });
      if(mob1)
      {
        this.validation22();
      }
      else{
        Swal.fire({
          title: 'Type the correct Old Email',
          icon: 'error',
        })
      }
    },err=>{
      alert("something went wrong")
    
    })

  }
  validation22(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob = res.find((a:any)=>{
        return a.email === this.changemail.value.newmail
      });
      if(mob)
      {
        Swal.fire({
          title: 'Email Registered with another account',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      else{
        Swal.fire({
          title: 'Email Successfully changed',
          text: 'Close the pop up and refresh the page to see the updated data',
          icon: 'success',
        })
        this.postdata2();
      }
    },err=>{
      alert("something went wrong")
    
    })

  }

  postdata2() {
    this.loginService.changemail(this.id,this.user.newmail)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  sclose2(){
    this.changemail.reset();
  }
  
//change password
  changepass = new FormGroup({
    mobilenumber3: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    otp2: new FormControl('', [Validators.required, Validators.pattern('(\\d{4})')]),
    password3: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    repassword: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])

  });

  get f4() {
    return this.changepass.controls
  }

  validation(){
    this.http.get<any>("http://localhost:8999/login/getclient").subscribe(res=>{
      const mob = res.find((a:any)=>{if(a.mobilenumber === this.changepass.value.mobilenumber3){this.to=a.email,this.id=a.id}
        return a.mobilenumber === this.changepass.value.mobilenumber3
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
    this.user.mobilenumber3 = this.f4['mobilenumber3'].value;
    this.user.otp2 = this.f4['otp2'].value;
    this.user.password3 = this.f4['password3'].value;
    this.user.repassword = this.f4['repassword'].value;

    // to check the password and Otp:::::::::::
    if(this.user.otp2 === this.OTP ){
      if(this.user.password3 === this.user.repassword){
        this.postdata();
        this.alert2();
        this.changepass.reset();
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
      text: 'Close the pop up and refresh the page to see the updated data',
      icon: 'success',
    })
}

  postdata() {
    this.loginService.forgotpassword(this.id,this.user.password3)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  pclose(){
    this.changepass.reset();
  }
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
