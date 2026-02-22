import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/shared/model/users';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  usersArr : Array<Iusers> = []

  constructor(private _userService : UserService) { }

  ngOnInit(): void {

    this._userService.fetchUsers()
          .subscribe(data =>{
            console.log(data)
            this.usersArr = data
          })
  }

}
