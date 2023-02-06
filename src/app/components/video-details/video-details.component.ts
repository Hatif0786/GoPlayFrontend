import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from 'src/app/models/user-dto';
import { VideoDto } from 'src/app/models/video-dto';
import { UserService } from 'src/app/service/user.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit{
  NotBookmarked: Boolean = true;
  Bookmarked: Boolean = false;


subscribeToUser() {
  this.uservice.subscribeToUser(this.userUploaded).subscribe(data => {
    this.showUnsubscribeButton=true;
    this.showSubscribeButton=false;
  })
}

unSubscribeToUser(){
  this.uservice.unsubscribeToUser(this.userUploaded).subscribe(data => {
    this.showUnsubscribeButton=false;
    this.showSubscribeButton=true;
  })
}

disLikeVideo() {
  this.service.dislikeVideo(this.videoId).subscribe(data=> {
    this.likes = data.likes;
    this.dislikes = data.dislikes;
  })
}
likeVideo() {
  this.service.likeVideo(this.videoId).subscribe(data => {
    this.likes = data.likes;
    this.dislikes = data.dislikes;
  })
}
  user: UserDto | undefined;
  videoUrl!: string;
  videoId!: string;
  videoTitle!: string;
  videoDescription!: string;
  videoTags: Array<String> = [];
  videoAvailable: boolean= false;
  likes: number = 0;
  dislikes: number = 0;
  viewCount: number = 0;
  showSubscribeButton: Boolean = true;
  showUnsubscribeButton: Boolean = false;
  UserHistroy : Array<String> = [];
  HistoryVideos: Array<VideoDto> = [];
  userUploaded: string = '';
  currentUser: string = '';
  check1: Boolean=false;
  check2: Boolean=false;
 
  constructor(private activatedRoute: ActivatedRoute, private service: VideoService, private uservice: UserService){
    this.videoId = this.activatedRoute.snapshot.params["videoId"]; 
    this.getVideo();
    this.checkUserSubscribedandVideoSaved();
    
  }
  checkUserSubscribedandVideoSaved() {
    this.uservice.getCurrentUser().subscribe(data => {
      for(let s of data.subscribedToUsers){
        if(this.videoId==s){
          this.check1=true;
          break;
        }
      }
      for(let s of data.savedForWatchLater){
        if(this.videoId==s){
          this.check2=true
           break;
        }
      }
    })
  }
  ngOnInit(): void {
    this.getUerHistoryVideos();
  }


  getVideo(){
    this.service.getVideo(this.videoId).subscribe(data=> {
      this.videoUrl = data.videoUrl;
      this.videoTitle=data.title;
      this.videoDescription=data.description;
      this.videoTags = data.tags,
      this.videoAvailable = true;
      this.likes = data.likes,
      this.dislikes = data.dislikes,
      this.viewCount = data.viewCount;
      this.userUploaded = data.userUploaded;
    })
  }


  getUerHistoryVideos(){
   this.uservice.getHistoryVideos().subscribe(data => {
    this.UserHistroy = data;
    this.VideosFromHistoryVideos();
   })
   
  }


  VideosFromHistoryVideos(){
    for(var vid of this.UserHistroy){
      this.service.getVideo(vid).subscribe(data => {
        this.HistoryVideos.push(data);
      })
    }
    if(this.userUploaded){
      this.uservice.getUserDetails(this.userUploaded).subscribe(data => {
        this.user=data;
    })
    }
  }

  saveToWatchLater(){
    this.uservice.saveToWatchLater(this.videoId).subscribe(data => {
      this.Bookmarked=true;
      this.NotBookmarked=false
    })
  }

  removeFromsaveToWatchLater(){
    this.uservice.removeFromSavedToWatchLater(this.videoId).subscribe(data => {
      this.Bookmarked=false;
      this.NotBookmarked=true
    })
  }

}
