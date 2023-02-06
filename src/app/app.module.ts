import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFileDropModule } from 'ngx-file-drop';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import { SaveVideoDetailsComponent } from './components/save-video-details/save-video-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { AuthInterceptor, AuthModule } from 'angular-auth-oidc-client';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { LikedVideosComponent } from './components/liked-videos/liked-videos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatListModule} from '@angular/material/list';
import { FeaturedComponent } from './components/featured/featured.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { CallbackComponent } from './components/callback/callback.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent,
    HeaderComponent,
    SaveVideoDetailsComponent,
    VideoPlayerComponent,
    VideoDetailsComponent,
    HomeComponent,
    HistoryComponent,
    SubscriptionsComponent,
    LikedVideosComponent,
    SidebarComponent,
    FeaturedComponent,
    VideoCardComponent,
    CallbackComponent,
    CommentsComponent,
    AccountInfoComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    NgxFileDropModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatSnackBarModule,
    AuthConfigModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
