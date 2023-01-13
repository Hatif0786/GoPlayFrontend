import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFileDropModule } from 'ngx-file-drop';
import {HttpClientModule} from "@angular/common/http";
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
@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent,
    HeaderComponent,
    SaveVideoDetailsComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
