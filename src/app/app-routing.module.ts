import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ChallengeComponent } from './challenge/challenge.component';


const appRoutes: Routes = [
    { path:'', redirectTo:'/challenge', pathMatch:'full'},
    { path:'show-image', component:ShowImageComponent},
    { path:'show-posts', component:ShowPostsComponent},
    { path:'challenge', component:ChallengeComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}