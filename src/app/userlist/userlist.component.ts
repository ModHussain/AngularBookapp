import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [ServicesService]
})
export class UserlistComponent implements OnInit {
  users: any;
data: any;
  constructor(private service: ServicesService ) { }
getusers() {
    this.service.users().subscribe( res => {
      console.log(res);
      this.users = res.json();
      console.log(this.users);
      });
   }
  ngOnInit() {
    this.getusers();
  }

}
