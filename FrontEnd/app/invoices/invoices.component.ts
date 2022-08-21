import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Broadband } from '../broadband';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;


  makePDF() {
    let pdf = new jsPDF('landscape', 'pt', 'a2');

    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("invoice.pdf");
      }
    });
    this.flag=true;

  }

  myDate: Date = new Date();
  date: any
  amount:any;
  broadband: Broadband = new Broadband();
  broadbands: any;
  refId: any;
  body: any;
  body1: any;
  flag:any;
  result1: Array<any> = [];

  result2: Array<any> = [];


  constructor(private mobileService: MobileService, private datePipe: DatePipe) {
    this.body=sessionStorage.getItem('names');
    // this.body1=sessionStorage.getItem('names1');
    // this.amount=Number(sessionStorage.getItem('names1'));
    // this.amount=this.amount+32-50;
    this.mobileService.getBroadbandPlans().subscribe((dat: any) => {
      this.broadbands = dat; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      // this.mobiles.pipe(map(data => { this.result1= dat.price}))
      console.log(mobileService.result);
      this.refId = Math.floor(1000000000 + Math.random() * 9000000000);
      this.date = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');

      //       // this.result1[0]=this.mobiles.id;
      //       // this.result1[1]=this.mobiles.sim;
      //       // this.result1[2]=this.mobiles.price;
      //       // this.result1[3]=this.mobiles.data;
      //       // this.result1[4]=this.mobiles.sms;
      //       // this.result1[5]=this.mobiles.calls;

      //       // this.result2 = Object.keys(this.result1).map(index => {
      //       //   let person = this.result1[0];
      //       //   return person;
      //       // });
      //     // this.dtTrigger.next();
      // {{this.refId}}
      // this.body = "The Reference Id : {{this.refId}}";
      
      console.log(this.body);
    })
    //   // console.log(this.result2);
    //   // this.mobiles.pipe(map(data => { this.result1= this.mobiles.price}))
  
  }
  get f() {
    return this.refId;
  }


  ngOnInit(): void {
    this.flag=false;
  }

  send() {
    console.log("akshai");
    this.mobileService.sendEmail(this.f['email'].value).subscribe((dat: any) => {

    })
  } 

}
