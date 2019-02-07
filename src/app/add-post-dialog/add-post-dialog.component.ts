import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { Post } from '../postDetail';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {
  id: number;
  title: string;
  body: string;

  obj = {};
  

  constructor(private postService: PostService, private dialogRef: MatDialogRef<AddPostDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  addPost() {
    this.obj = {
      title: this.title,
      body: this.body
    }
   this.postService.addPost(this.obj)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
    alert("Success added post");
    this.dialogRef.close();
  }


}
