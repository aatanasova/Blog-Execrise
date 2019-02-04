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


import { AppComponent } from './app.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ChallengeComponent } from './challenge/challenge.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent,
    ShowImageComponent,
    ChallengeComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
