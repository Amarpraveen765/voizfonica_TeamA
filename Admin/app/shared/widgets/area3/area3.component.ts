import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from 'src/app/layouts/default/mobile';
import { MobileService } from 'src/app/layouts/default/mobile.service';

@Component({
  selector: 'app-widgets-area3',
  templateUrl: './area3.component.html',
  styleUrls: ['./area3.component.scss']
})
export class Area3Component implements OnInit {

  count=0;
  mobile: Mobile = new Mobile();
  mobiles:any;
  deleteMessage: any;
  constructor(private mobileService: MobileService,private router: Router) { 
    this.mobileService.getPlans().subscribe((dat: any) => {
      this.mobiles = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.mobiles);
      // this.dtTrigger.next();

    })
  }
  deletePlans(id: number) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      
    
    //delete users is called here
    this.mobileService.deletePlan(id)

      .subscribe(

        data => {

          console.log(data);

          this.deleteMessage=true;

          this.mobileService.getPlans().subscribe(data =>{

            this.mobiles =data

            })

        },

        error => console.log(error));
       }
  }
  ngOnInit(): void {
  }

}
