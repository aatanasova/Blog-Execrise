import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostService } from '../post.service';
import { Post } from '../postDetail';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  posts = [];

  constructor( private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.postService.getPost().
    subscribe(
      (data: Post[]) => {
      this.posts = data;
      console.log("Prva proba", this.posts)
      }
    )
  }

  deletePost(id) {
    console.log(id)
    this.postService.deletePost(id).subscribe( (data) => {
      alert("Success deleted post")
    });
  }

  confirmDelete(id) {
    var x = confirm("Are you sure you want to delete?");
      if (x) {
        return this.deletePost(id);
      } else {
        return false;
      }
    }
  }




}
