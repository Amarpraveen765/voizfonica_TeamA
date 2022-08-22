import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { Broadband } from 'src/app/layouts/default/broadband';
import { Mobile } from 'src/app/layouts/default/mobile';
import { MobileService } from 'src/app/layouts/default/mobile.service';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  broadband: Broadband = new Broadband();
  broadbands:any;
  mobile: Mobile = new Mobile();
  mobiles:any;
  deleteMessage: any;

  // chartOptions: {} | undefined;
  // constructor() { }
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  
  constructor(private mobileService: MobileService,private router: Router) { 
    this.mobileService.getBroadbandPlans().subscribe((dat: any) => {
      this.broadbands = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.broadbands);
      // this.dtTrigger.next();

    })
    this.mobileService.getPlans().subscribe((dat: any) => {
      this.mobiles = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.mobiles);
      // this.dtTrigger.next();

    })
  }
  ngOnInit(): void {
    // this.chartOptions = {}
  }
}


