import { Component, OnInit } from '@angular/core';
import { ImageInfoDialogComponent } from '../image-info-dialog/image-info-dialog.component';
import { ImageService } from '../image.service';
import { Image } from '../imageDetail';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator'; 

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  images = [];

  constructor(private imageService: ImageService, public dialog: MatDialog) { }

  ngOnInit() {
    this.imageService.getImage().
    subscribe (
      (data: Image[]) => {
        this.images=data;
        console.log('Proba', this.images)
      }
    )
  }

  openDialog(image: any): void {
    const dialogRef = this.dialog.open(ImageInfoDialogComponent, {
      data:{image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result)
    });
  }

  deleteImage(id:number) {
    console.log(id)
    this.imageService.deleteImage(id).subscribe( (data) => {
      for(var i = 0; i < this.images.length; i++) {
        if(this.images[i].id == id) {
            this.images.splice(i, 1);
            break;
        }
      }
      alert("Success deleted image")
    });
  }

  confirmDelete(id: number) {
    var x = confirm("Are you sure you want to delete?");
    if (x) {
        return this.deleteImage(id);
    } else {
      return false;
   }
  }

}
