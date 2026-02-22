import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss'],
  // imports: [MatButtonModule],
  // imports: [MatButtonModule]
})
export class GetConfirmComponent implements OnInit {

  msg !: string

  constructor(private _matRef : MatDialogRef<GetConfirmComponent>) { }

  ngOnInit(): void {


  }

  onClose(flag : boolean){
    this._matRef.close(flag)
  }



}
