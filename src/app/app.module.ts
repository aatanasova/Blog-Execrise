import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; 
import { AppRoutingModule } from './app-routing.module'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

import { AppComponent } from './app.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { PostInfoDialogComponent } from './post-info-dialog/post-info-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent,
    ShowImageComponent,
    ChallengeComponent,
    PostInfoDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  entryComponents:[ PostInfoDialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
