import { Component, Input } from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  preload: string = 'auto';
  api!: VgApiService;
  @Input() videoUrl!: string | '';

  onPlayerReady(api: VgApiService) {
    this.api = api;

    // this.api.getDefaultMedia().subscriptions.ended.subscribe(
    //     () => {
    //         // Set the video to the beginning
    //         this.api.getDefaultMedia().currentTime = 0;
    //     }
    // );
}


}
