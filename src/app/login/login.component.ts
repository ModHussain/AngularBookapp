import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServicesService]
})
export class LoginComponent implements OnInit {
data: any = {};
result: any = {};

  constructor(private service: ServicesService, private router: Router) { }

  login() {
    const userdetails = 'email=' + this.data.email + '&password=' + this.data.password;
    this.service.login(userdetails).subscribe(res => {
      this.result = res.json();
      console.log(this.result);
      if (this.result === 'User not found') {
        alert(this.result);
      } else if (this.result === 'Incorrect password') {
        alert(this.result);
      } else {
        this.router.navigateByUrl('dashboard');
      }
      });

  }


  ngOnInit() {
  }

}
