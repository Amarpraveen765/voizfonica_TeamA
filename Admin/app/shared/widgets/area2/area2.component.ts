import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Broadband } from 'src/app/layouts/default/broadband';
import { Mobile } from 'src/app/layouts/default/mobile';
import { MobileService } from 'src/app/layouts/default/mobile.service';

@Component({
  selector: 'app-widgets-area2',
  templateUrl: './area2.component.html',
  styleUrls: ['./area2.component.scss']
})
export class Area2Component implements OnInit {

  mobile: Mobile = new Mobile();
  mobiles:any;
  broadband:Broadband = new Broadband();
  constructor(private mobileService: MobileService,private router: Router) {
   }
   profileForm = new FormGroup({
    price: new FormControl(''),
    sim: new FormControl(''),
    days: new FormControl(''),
    addon: new FormControl(''),
    calls: new FormControl(''),
    sms: new FormControl(''),
    data: new FormControl(''),
    price1: new FormControl(''),
    sim1: new FormControl(''),
    calls1: new FormControl(''),
    data1: new FormControl(''),
    sp: new FormControl(''),
  });
  // profileForm1 = new FormGroup({
  //   price1: new FormControl(''),
  //   sim1: new FormControl(''),
  //   calls1: new FormControl(''),
  //   data1: new FormControl(''),
  //   sp: new FormControl(''),
  // });
  get f() {
    return this.profileForm.controls;
  }
  
  onSubmit(){
    console.log("akshai");
    var delBtn = confirm(' Do you want to Add this User ?');
    if (delBtn == true) {
    console.log(this.profileForm.value);
    this.mobile.price = this.f['price'].value;
    this.mobile.sim = this.f['sim'].value;
    this.mobile.days = this.f['days'].value;
    this.mobile.data = this.f['data'].value;
    this.mobile.calls = this.f['calls'].value;
    this.mobile.sms = this.f['sms'].value;
    this.mobile.addon = this.f['addon'].value;
    this.Add()
    }
  }
  onSubmit1(){
    var delBtn = confirm(' Do you want to Add this User ?');
    if (delBtn == true) {
    console.log(this.profileForm.value);
    this.broadband.price = this.f['price1'].value;
   this.broadband.sim = this.f['sim1'].value;
    this.broadband.speed = this.f['sp'].value;
    this.broadband.data = this.f['data1'].value;
    this.broadband.calls = this.f['calls1'].value;
    this.Add1()
    }
    
  }

   Add(){
    this.mobileService.addMobilePlans(this.mobile)
      .subscribe(data => console.log(data), error => console.log(error));
    this.mobile = new Mobile();
      // this.router.navigate(['/posts']);
      // this.dtTrigger.next();
      console.log("tejas");
    }
    Add1(){
      this.mobileService.addBroadbandPlans(this.broadband)
      .subscribe(data => console.log(data), error => console.log(error));
    this.broadband = new Broadband();
      // this.router.navigate(['/posts']);
      // this.dtTrigger.next();
      console.log("tejas1");

    }
  ngOnInit(): void {
  }
}


