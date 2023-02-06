import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';
import { VideoDto } from 'src/app/models/video-dto';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit{

  @Input()
  video!: VideoDto;

  user: UserDto | undefined;
  
  constructor(private uservice: UserService){}
  
  
  ngOnInit(): void {
    this.uservice.getUserDetails(this.video.userUploaded).subscribe(data => {
        this.user=data;
    })
  }


 


  



}
