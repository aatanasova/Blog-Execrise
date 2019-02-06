import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './imageDetail';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor( private http: HttpClient) { }

  getImage(): Observable<Image[]>{
    return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos')
  }

  deleteImage(id: number){
    const url = `${'http://jsonplaceholder.typicode.com/photos/'}/${id}`;
    return this.http.delete(url)
  }

}
