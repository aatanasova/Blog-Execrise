import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../postDetail';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  posts = [];

  constructor( private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost().
    subscribe(
      (data: Post[]) => {
      this.posts = data;
      console.log("Prva proba", this.posts)
      }
    )
  }

}
