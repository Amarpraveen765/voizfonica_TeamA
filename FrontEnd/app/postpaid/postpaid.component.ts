import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {
  count=0;
  mobile: Mobile = new Mobile();
  mobiles:any;
  constructor(private mobileService: MobileService,private router: Router) { 
    this.mobileService.getPlans().subscribe((dat: any) => {
      this.mobiles = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.mobiles);
      // this.dtTrigger.next();

    })
  }

  ngOnInit(): void {
  }
  createInvoice(id: any,price:any){
    sessionStorage.setItem('names', id);
    sessionStorage.setItem('names1', price);
    this.mobileService.updateUser(id).subscribe((res:any)=>{
      this.mobiles=res;
      //console.log("adshbgqef");
      
      // console.log(this.mobiles);
      this.mobileService.result.push(res);
        this.router.navigate(['/invoice']);
    }, (err)=>{
      console.log(err);
    }
)
  }

}
  