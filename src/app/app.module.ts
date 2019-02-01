import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; 
import { AppRoutingModule } from './app-routing.module'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ChallengeComponent } from './challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent,
    ShowImageComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
