import { Component, OnInit } from '@angular/core';
import { VideoDto } from 'src/app/models/video-dto';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit{

  featuredVideos : Array<VideoDto> = [];

  constructor(private service: VideoService){
  }

  ngOnInit(): void {
    this.service.getAllVideos().subscribe(data=> {
      this.featuredVideos = data;
    })
  }


}
