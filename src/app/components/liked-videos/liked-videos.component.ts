import { Component, OnInit } from '@angular/core';
import { VideoDto } from 'src/app/models/video-dto';
import { UserService } from 'src/app/service/user.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-liked-videos',
  templateUrl: './liked-videos.component.html',
  styleUrls: ['./liked-videos.component.css']
})
export class LikedVideosComponent implements OnInit{
  UserLiked : Array<String> = [];
  LikedVideos: Array<VideoDto> = [];
   
  constructor(private uservice: UserService, private service: VideoService){

  }

  ngOnInit(): void {
    this.getUerLikedVideos();
  }


  getUerLikedVideos(){
    this.uservice.getLikedVideos().subscribe(data => {
     this.UserLiked = data;
     console.log(this.UserLiked);
     this.VideosFromLikedVideos();
    })
    
   }
 
 
   VideosFromLikedVideos(){
     for(var vid of this.UserLiked){
       this.service.getVideo(vid).subscribe(data => {
         this.LikedVideos.push(data);
       })
     }
   }

}
