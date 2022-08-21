import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Broadband } from '../broadband';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-broadbandprepaid',
  templateUrl: './broadbandprepaid.component.html',
  styleUrls: ['./broadbandprepaid.component.css']
})
export class BroadbandprepaidComponent implements OnInit {
  count = 0;
  broadband: Broadband = new Broadband();
  broadbands: any;
  constructor(private mobileService: MobileService,private router:Router) {
    this.mobileService.getBroadbandPlans().subscribe((dat: any) => {
      this.broadbands = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.broadbands);
      // this.dtTrigger.next();

    })
  }
  createInvoice(id: any, price:any){
    sessionStorage.setItem('names', id);
    sessionStorage.setItem('names1', price);
    this.mobileService.updateUser(id).subscribe((res:any)=>{
      this.broadbands=res;
      //console.log("adshbgqef");
      
      // console.log(this.mobiles);
      this.mobileService.result.push(res);
        this.router.navigate(['/invoices']);
    }, (err)=>{
      console.log(err);
    }
)
  }

  ngOnInit(): void {
  }

}
