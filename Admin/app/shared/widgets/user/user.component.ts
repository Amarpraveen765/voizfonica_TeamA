import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/layouts/default/mobile.service';
import { Users } from 'src/app/layouts/default/users';

@Component({
  selector: 'app-widgets-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
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
  ngOnInit(): void {
  }

}
