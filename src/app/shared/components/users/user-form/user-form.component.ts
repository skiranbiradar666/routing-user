import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { COUNTRIES_META_DATA } from 'src/app/shared/const/country';
import { ICountry } from 'src/app/shared/model/country';
import { Iusers } from 'src/app/shared/model/users';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm !: FormGroup
  countryArr : Array<ICountry> = COUNTRIES_META_DATA

  isInEditMode : boolean = false
  userId  !: string
  editUserObj !: Iusers

  constructor(private _fb : FormBuilder,
    private _userService : UserService,
   private _route : Router,
   private _activeRoute : ActivatedRoute,
   private _snackbarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this.createUserForm()
    this.addSkills()
    this.controls['address'].get('current')?.valueChanges
          .subscribe(res =>{
            if(this.controls['address'].get('current')?.valid){
              this.controls['isAddSame'].enable({emitEvent : false})
            }else{
             this.controls['isAddSame'].disable({emitEvent : false})
             this.controls['isAddSame'].reset() 
            }
          })

    this.controls['isAddSame'].valueChanges
            .subscribe(res =>{
              if(res){
                let current = this.controls['current'].value;
                this.controls['permanent'].patchValue(current)
                this.controls['permanent'].disable({emitEvent : false})
              }else{
                this.controls['permanent'].enable({emitEvent : false})
                this.controls['permanent'].reset()
              }
            })
          
    this.onSkillEdit()
    
      
  }

  checkAddSame(){
    let currentAdd = this.controls['address'].get('current')?.value
    let permanentAdd = this.controls['address'].get('permanent')?.value
    if(this.controls['address'].get('current')?.valid){
        this.controls['isAddSame'].enable({emitEvent : false})    
    }
    const isSame = JSON.stringify(currentAdd) === JSON.stringify(permanentAdd)

    if(isSame && this.controls['address'].get('current')?.valid){
      this.controls['isAddSame'].setValue(true, {emitEvent : false})

      this.controls['address'].get('permanent')?.disable({emitEvent :false})
    }
  }
   
  createUserForm(){
    this.userForm = this._fb.group({
      userName : new FormControl(null, [Validators.required]),
      userRole :  new FormControl('Candidate'),
      profileDescription : new FormControl(null, [Validators.required]),
      profileImage : new FormControl(null, [Validators.required]),
      experienceYears : new FormControl('3'),
      isActive : new FormControl('Yes'),
      address : new FormGroup({
        current : new FormGroup({
            city :new FormControl(null, [Validators.required]),
            state : new FormControl(null, [Validators.required]),
            country : new FormControl('India', [Validators.required]),
            zipcode : new FormControl(null, [Validators.required]),
        }),
        permanent : new FormGroup({
             city :new FormControl(null, [Validators.required]),
            state : new FormControl(null, [Validators.required]),
            country : new FormControl('India', [Validators.required]),
            zipcode : new FormControl(null, [Validators.required]),
        })
      }),
      isAddSame : new FormControl({value : null, disabled : true}, [Validators.required]),
      skills : new FormArray([])
    })
  }

  onUserAdd(){
    console.log(this.userForm)
    console.log(this.userForm.value)
    let user = this.userForm.getRawValue()
      this._userService.cresteUsers(user)
            .subscribe({
              next : data =>{
                console.log(data)
                this._route.navigate(['users'])
                this._snackbarService.snackBar('The New User is Added Successfully !')
              },
              error : err =>{
                console.log(err)
              }
            })
  }

  onUpdate(){
    if(this.userForm.valid){
      let updateObj = {...this.userForm.getRawValue(), userId : this.userId}

      this._userService.updateUser(updateObj)
            .subscribe({
              next : data =>{
                console.log(data)
                this._route.navigate(['users'])
                this._snackbarService.snackBar('The user is updated Successfully!')
              },
              error : err =>{
                console.log(err)
              }
            })
    }

  }

  addSkills(){
    let skillControl = new FormControl(null, [Validators.required])
    this.skillsArr.push(skillControl)
  }

  onSkillRemove(i : number){
    this.skillsArr.removeAt(i)
  }

  onSkillEdit(){

        this.userId = this._activeRoute.snapshot.params['id']!
    // this.userId = this._activeRoute.snapshot.paramMap.get('id')!;
    console.log(this.userId)

    if(this.userId){
      this.isInEditMode = true
      this._userService.fetchUserById(this.userId)
            .subscribe({
              next : data =>{
                console.log(data)
                this.editUserObj = data
                this.userForm.patchValue({...data, skills : []})
                this.skillsArr.clear()
                data.skills.forEach(sk =>{
                  let formControls = new FormControl(sk, Validators.required)
                  this.skillsArr.push(formControls)
                  this.checkAddSame()
                })
              },
              error : err =>{
                console.log(err)
              }
            })

        

    }
  }

  get controls(){
    return this.userForm.controls
  }
  get skillsArr(){
    return this.controls['skills'] as FormArray
  }


}

