import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { Image } from '../imageDetail';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-add-image-dialog',
  templateUrl: './add-image-dialog.component.html',
  styleUrls: ['./add-image-dialog.component.css']
})
export class AddImageDialogComponent implements OnInit {
  title: string;
  url: string;
  thumbnailUrl: string;

  obj = {};

  constructor(private imageService: ImageService,private dialogRef:MatDialogRef<AddImageDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  addImage() {
    this.obj = {
      title: this.title,
      url: this.url,
      thumbnailUrl: this.thumbnailUrl
    }
    console.log(this.obj)
   this.imageService.addImage(this.obj)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
    alert("Success added image");
    this.dialogRef.close();
  }

}
