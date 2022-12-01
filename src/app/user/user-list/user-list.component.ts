import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users:user[];

  constructor() { }
  
    f()
    {
      alert("bonjour");
    }

  

  ngOnInit(): void {
    this.Users=
    [
      {id:1,email:"foulen @esprit.tn"},
      {id:2,email:"houda.koubaa@esprit.tn"}
  
    ]
  }

}
