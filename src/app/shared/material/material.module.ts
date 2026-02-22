import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const matArr = [MatButtonModule, MatIconModule, MatDialogModule, MatCardModule, MatChipsModule, MatProgressSpinnerModule, MatSnackBarModule ]

@NgModule({
  declarations: [],
  imports: [...matArr,
    CommonModule
  ],
  exports : [...matArr]
})
export class MaterialModule { }
