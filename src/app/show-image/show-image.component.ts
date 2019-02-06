import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../imageDetail';
import {MatPaginatorModule} from '@angular/material/paginator'; 

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  images = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImage().
    subscribe (
      (data: Image[]) => {
        this.images=data;
        console.log('Proba', this.images)
      }
    )
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
