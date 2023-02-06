import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { CallbackComponent } from './components/callback/callback.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { LikedVideosComponent } from './components/liked-videos/liked-videos.component';
import { SaveVideoDetailsComponent } from './components/save-video-details/save-video-details.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children:[
      {
        path: "subscriptions", component: SubscriptionsComponent,
      },
      {
        path: "featured", component: FeaturedComponent,
      },
      {
        path: "history", component: HistoryComponent,
      },
      {
        path: "liked-videos", component: LikedVideosComponent,
      },
      {
        path: "account-info", component: AccountInfoComponent
      }
    ]
  },
  {
    path: "upload-video", component: UploadVideoComponent,
  },
  {
    path: "save-video-details/:videoId", component: SaveVideoDetailsComponent, pathMatch: "full"
  },
  {
    path: "video-details/:videoId", component: VideoDetailsComponent, pathMatch: "full"
  },
  {
    path: "callback", component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
