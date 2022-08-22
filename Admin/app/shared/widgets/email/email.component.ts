import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/layouts/default/mobile.service';
import { Users } from 'src/app/layouts/default/users';

@Component({
  selector: 'app-widgets-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
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
  sendMail(email:any){
    var delBtn = confirm(' Do you want to Send this User Mail ?');
    if (delBtn == true) {
    console.log("akshai");
    this.mobileService.sendEmail(email).subscribe(data=>{

    })
  }
  }
      // this.router.navigate(['/posts']);
      // this.dtTrigger.next();
    

  ngOnInit(): void {
  }

}
