import { Component, Input, OnInit } from '@angular/core';
import { Iusers } from 'src/app/shared/model/users';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userObj !: Iusers

  constructor() { }

  ngOnInit(): void {
  }

}
