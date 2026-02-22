import { Injectable } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class FormUtilityService {
  skillsArr!: Array<Iusers>

  constructor() { }

  patchFormArr(dataArr : Array<any>, formArr : FormArray){

    formArr.clear()

   

  }
}
