import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';
import { User } from '../user';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  username2:any;
  num:any;
  users:any;
  user: User = new User();

  constructor(private router:Router,private loginService: LoginService,private http: HttpClient) { 
    this.username2 = sessionStorage.getItem('names');

  }

  ngOnInit(): void {
  }

  loggedin(){
    return localStorage.getItem('customer');
  }
  onLogout(){
    localStorage.removeItem('customer');
    Swal.fire({
      title: 'Successfully Logged out',
      icon: 'success',
      confirmButtonText: 'OK'

    }).then((result)=>{
      if(result.value){
        this.router.navigate(['home'])
      }
  })
  }

}
