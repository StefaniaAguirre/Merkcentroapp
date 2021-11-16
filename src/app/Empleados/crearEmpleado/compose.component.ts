import { Component, OnInit, Input } from '@angular/core';
import { Inject} from '@angular/core' ;
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})



export class ComposeComponent implements OnInit {

  animal: string= "";
  name: string ="";
  constructor() {}

  ngOnInit(): void {
  }
  

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
