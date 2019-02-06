import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { MatInputModule } from '@angular/material/input'; 
import { Image } from '../imageDetail';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-image-info-dialog',
  templateUrl: './image-info-dialog.component.html',
  styleUrls: ['./image-info-dialog.component.css']
})
export class ImageInfoDialogComponent implements OnInit {

  image:Image;

  imageObj={};

  constructor(private imageService: ImageService, private dialogRef: MatDialogRef<ImageInfoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.imageObj=this.data.image;
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    this.imageService.updateImage(this.imageObj)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.dialogRef.close('It was edited')
  }

}
