import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostService } from '../post.service';
import { Post } from '../postDetail';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { PostInfoDialogComponent } from '../post-info-dialog/post-info-dialog.component';




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

  openDialog(): void {
    const dialogRef = this.dialog.open(PostInfoDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}





