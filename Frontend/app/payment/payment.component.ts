import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  price:any

  constructor() { 
    this.price=sessionStorage.getItem('names1');
  }

  ngOnInit(): void {
  }
  successNotification() {
    Swal.fire('Sucessful', 'Payment Sucessful Thankyou For using our service!', 'success');
  }
  

}
