import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent implements OnInit{
  title = 'voizfonica';
  message:any;
  constructor(private loginSerice:LoginService){ }

  ngOnInit(){
    // this.message= this.sharedata.getMessage();

  }

} 
