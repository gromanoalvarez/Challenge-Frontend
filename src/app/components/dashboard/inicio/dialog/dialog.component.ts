import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PostsI } from "src/app/interfaces/posts";

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
  })
  export class DialogOverviewExampleDialog {

    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }