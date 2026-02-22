import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { userDetails } from '../const/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersArr : Array<Iusers> = userDetails

  constructor() { }

  cresteUsers(user :Iusers): Observable<Iusers>{

    let newUser : Iusers = {...user, userId : Date.now().toString()}
    this.usersArr.push(newUser)

    return of(newUser)

  }

  fetchUsers() : Observable<Iusers[]>{
    return of(this.usersArr)
  }

  fetchUserById(id : string) :Observable<Iusers>{

    let user1 = this.usersArr.find(u =>u.userId === id)!
    return of(user1)
  }
  updateUser(user : Iusers) : Observable<Iusers>{
    let getIndex = this.usersArr.findIndex(u => u.userId === user.userId)
    this.usersArr[getIndex] = user

    return of(user)
  }
  removeUser(id : string) :Observable<Iusers>{
    let getIndex = this.usersArr.findIndex(u => u.userId === id)
    let removeUser = this.usersArr.splice(getIndex, 1)
    return of(removeUser[0])

  }
}
