import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/layouts/default/mobile.service';
import { Users } from 'src/app/layouts/default/users';

@Component({
  selector: 'app-widgets-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss']
})
export class User1Component implements OnInit {
  count=0;
  user: Users = new Users();
  users:any;
  deleteMessage: any;
  constructor(private mobileService: MobileService,private router: Router) { 
    this.mobileService.getUsers().subscribe((dat: any) => {
      this.users = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.users);
      // this.dtTrigger.next();

    })
  }
  deleteUsers(id: number) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      
    
    //delete users is called here
    this.mobileService.deleteUsers(id)

      .subscribe(

        data => {

          console.log(data);

          this.deleteMessage=true;

          this.mobileService.getPlans().subscribe(data =>{

            this.users =data

            })
            // this.router.navigate(['/usersDelete']);

        },

        error => console.log(error));
       }
  }

  ngOnInit(): void {
  }

}
