import { Component, OnInit } from '@angular/core';
import { VideoDto } from 'src/app/models/video-dto';
import { UserService } from 'src/app/service/user.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  UserHistroy : Array<String> = [];
  HistoryVideos: Array<VideoDto> = [];
   
  constructor(private uservice: UserService, private service: VideoService){

  }

  ngOnInit(): void {
    this.getUerHistoryVideos();
  }


  getUerHistoryVideos(){
    this.uservice.getHistoryVideos().subscribe(data => {
     this.UserHistroy = data;
     console.log(this.UserHistroy);
     this.VideosFromHistoryVideos();
    })
    
   }
 
 
   VideosFromHistoryVideos(){
     for(var vid of this.UserHistroy){
       this.service.getVideo(vid).subscribe(data => {
         this.HistoryVideos.push(data);
       })
     }
   }

}
