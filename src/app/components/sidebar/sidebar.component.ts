import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';
import { VideoDto } from 'src/app/models/video-dto';
import { CoreService } from 'src/app/service/core.service';
import { UserService } from 'src/app/service/user.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  sidenavState: any = false;
  SubscribedToUsersIds: Array<String> =  [];
  SubscribedToUsers: Array<any>= [];
  savedToWatchLaterVid: Array<VideoDto> = [];
  savedToWatchLaterVidId: Array<String> = []

  constructor(private coreService: CoreService,private vservice: VideoService, private userService: UserService){
  }
  ngOnInit(): void {
    this.sidenavState = this.coreService.getSideNavState();
    this.getSubscribedToUser();
    this.getUserDetails();
  }

  getSubscribedToUser(){
    this.userService.getSubscribedToUsers().subscribe(data => {
        this.SubscribedToUsersIds = data;
        this.getSubscribedUserDetails();
    })
    
  }

  getUserDetails(){
    this.userService.getCurrentUser().subscribe(data=> {
        console.log(data.savedForWatchLater);
        this.savedToWatchLaterVidId = data.savedForWatchLater;
        this.getVideoFromSavedForWatchLaterId();
    })
  }


  getVideoFromSavedForWatchLaterId(){
    for(let video of this.savedToWatchLaterVidId){
      this.vservice.getVideo(video).subscribe(data => {
        this.savedToWatchLaterVid.push(data);
      })
    }
  }

  getSubscribedUserDetails(){
    for(let user of this.SubscribedToUsersIds){
      this.userService.getUserDetails(user).subscribe(data=> {
        this.SubscribedToUsers.push(data);
      })
      
    }
  }


  
}
