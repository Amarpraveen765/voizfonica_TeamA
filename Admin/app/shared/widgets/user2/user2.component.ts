import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/layouts/default/mobile.service';
import { Users } from 'src/app/layouts/default/users';

@Component({
  selector: 'app-widgets-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss']
})
export class User2Component implements OnInit {
  count=0;
  user: Users = new Users();
  users:any;
  use='user';
  deleteMessage: any;
  constructor(private mobileService: MobileService,private router: Router) { 
    this.mobileService.getUsers().subscribe((dat: any) => {
      this.users = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.users);
      // this.dtTrigger.next();

    })
  }
  profileForm = new FormGroup({
    usertype: new FormControl(''),
  });
  get f() {
    return this.profileForm.controls;
  }

  updateUsers(id: number,usertype:any) {
    // console.log(this.profileForm.value);
    //   this.users.usertype = this.f['usertype'].value;
    //   console.log(this.f['usertype'].value);

    var delBtn = confirm(' Do you want to update ?');
    if (delBtn == true) {
      // console.log(this.users.usertype);
      if(usertype=='admin'){
        this.use='user';
      }else{
        this.use='admin';
      }
      
    // //delete users is called here
    this.mobileService.updateUsers(id,this.use).subscribe(data => {

          console.log(data);

          this.deleteMessage=true;

          this.mobileService.getPlans().subscribe(data =>{

            this.users =data

            })

        },

        error => console.log(error)); 
    }
  }
  ngOnInit(): void {
  }

}
