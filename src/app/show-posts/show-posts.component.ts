import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostService } from '../post.service';
import { Post } from '../postDetail';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
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
      // console.log("Prva proba", this.posts)
      }
    )
  }

  openDialog(post: any): void {
    const dialogRef = this.dialog.open(PostInfoDialogComponent, {
      data:{post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result)
    });
  }

  deletePost(id:number) {
    this.postService.deletePost(id).subscribe( (data) => {
      for(var i = 0; i < this.posts.length; i++) {
        if(this.posts[i].id == id) {
            this.posts.splice(i, 1);
            break;
        }
      }
       alert("Success deleted post")
     });
  }

  confirmDelete(id:number) {
    var x = confirm("Are you sure you want to delete?");
      if (x) {
        return this.deletePost(id);
      } else {
         return false;
      }
  }
}





