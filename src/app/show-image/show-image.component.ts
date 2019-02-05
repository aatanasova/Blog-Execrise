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

}
