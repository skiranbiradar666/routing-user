import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UserService } from 'src/app/shared/services/user.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId !: string
  userObj !: Iusers

  constructor(private _activeRoute : ActivatedRoute,
    private _userService : UserService,
    private _matDialog : MatDialog,
    private _routes : Router,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {

    this.userId = this._activeRoute.snapshot.params['id']
    console.log(this.userId)

    if(this.userId){
      this._userService.fetchUserById(this.userId)
            .subscribe({
              next : data =>{
                this.userObj = data
              },
              error : err =>{
                console.log(err)
              }
            })
    }
    
  }

  onRemove(){
    let matConfig = new MatDialogConfig()
    matConfig.data = 'Are you sure want to Remove it ?'
    matConfig.width = '400px'

    this._matDialog.open(GetConfirmComponent, matConfig)
            .afterClosed()
                .pipe(
                  filter(flag => flag === true),
                  switchMap(() => {
                    return this._userService.removeUser(this.userId)
                  })
                )
                .subscribe({
                  next : data =>{
                    console.log(data)
                    this._routes.navigate(['users'])
                    this._snackbar.snackBar('The User is Removed Successfully !!!')
                  },
                  error : err =>{
                    console.log(err)
                  }
                })

  }

}
