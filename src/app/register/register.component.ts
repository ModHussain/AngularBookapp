import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ServicesService]
})
export class RegisterComponent implements OnInit {

data: any = {};
result: any;
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit() {
  }
  register(data) {

    this.service.signup(data).subscribe(res => {
        this.result = res.json();
      console.log(this.result);
      this.router.navigate(['']);
      });
  }

}
