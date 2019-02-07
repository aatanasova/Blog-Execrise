import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 
import { AppRoutingModule } from './app-routing.module'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'; 


import { AppComponent } from './app.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { PostInfoDialogComponent } from './post-info-dialog/post-info-dialog.component';
import { ImageInfoDialogComponent } from './image-info-dialog/image-info-dialog.component';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { AddImageDialogComponent } from './add-image-dialog/add-image-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent,
    ShowImageComponent,
    ChallengeComponent,
    PostInfoDialogComponent,
    ImageInfoDialogComponent,
    AddPostDialogComponent,
    AddImageDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
  ],
  entryComponents:[ PostInfoDialogComponent, ImageInfoDialogComponent, AddPostDialogComponent, AddImageDialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
