import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: User = new User();

  constructor(private loginService: LoginService,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  contactus = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$")]),
    sub: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),


  });

  get f1() {
    return this.contactus.controls
  }
  submit(){
    this.user.cname = this.f1['name'].value;
    this.user.email = this.f1['email'].value;
    this.user.query = this.f1['sub'].value;
    this.user.message = this.f1['message'].value;
    this.alert1();
    this.postquery();
  }

  alert1(){
    Swal.fire({
      title: 'Process Succefull',
      text: 'Thankyou for your feedback',
      icon: 'success',
      confirmButtonText: 'Close'
    })
  }
  
  postquery() {
    this.loginService.postquerys(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

}
