import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDto } from 'src/app/models/user-dto';
import { VideoDto } from 'src/app/models/video-dto';
import { UserService } from 'src/app/service/user.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit{
 fileUploaded: any;
 selectedFile!: File;
 selectedFileName!: string;
 UserVideos: Array<VideoDto>= [];
 userVideosLoaded: Boolean = false;
 user: UserDto | undefined;

  constructor(private uservice: UserService, private matSnackBar: MatSnackBar, private vservice: VideoService){
    
  }


  onFileSelected(event: Event){
    //@ts-ignore
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.fileUploaded = true;
  }

  uploadUserImage() {
    this.uservice.uploadUserImage(this.selectedFile).subscribe(data=> {
      this.matSnackBar.open("Profile Image Successfully Uploaded!!!", "OK");
    })
  }

  ngOnInit(): void {
    this.uservice.getCurrentUser().subscribe(data => {
      this.user=data;
    });
    this.getUserVideos();
  }

  getUserVideos(){
    this.vservice.getVideosByUserId().subscribe(data => {
      this.userVideosLoaded = true;
      this.UserVideos=data;
    })
  }


  updateUserDetails(){

  }

}
