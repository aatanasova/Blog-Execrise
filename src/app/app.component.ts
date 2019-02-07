import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { AddImageDialogComponent } from './add-image-dialog/add-image-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog-execrise';

  constructor(public dialog: MatDialog){}


  openPostDialog(){
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result)
    });
  }

  openImageDialog(){
    const dialogRef = this.dialog.open(AddImageDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result)
    });
  }
}


