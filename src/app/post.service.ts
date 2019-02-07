import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './postDetail';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  deletePost(id: number){
    const url = `${'http://jsonplaceholder.typicode.com/posts/'}/${id}`;
    return this.http.delete(url)
  }

  updatePost(post: any){
    const url = `${'http://jsonplaceholder.typicode.com/posts/'}/${post.id}`;
    return this.http.put(url, post)
  }

  addPost(post: any) {
    return this.http.post('http://jsonplaceholder.typicode.com/posts/', post)
  }


  
}
