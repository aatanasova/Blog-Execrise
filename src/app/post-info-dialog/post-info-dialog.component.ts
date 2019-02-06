import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { MatInputModule } from '@angular/material/input'; 
import { Post } from '../postDetail';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-info-dialog',
  templateUrl: './post-info-dialog.component.html',
  styleUrls: ['./post-info-dialog.component.css']
})
export class PostInfoDialogComponent implements OnInit {
  post: Post;

  postObj={};

  constructor(private postService: PostService, private dialogRef: MatDialogRef<PostInfoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.postObj = this.data.post;
    // console.log(this.postObj)
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    this.postService.updatePost(this.postObj)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.dialogRef.close('It was edited')
  }

}
