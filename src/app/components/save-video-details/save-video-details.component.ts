import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/service/video.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VideoDto } from 'src/app/models/video-dto';

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: VideoService,
              private _snackBar: MatSnackBar) { 
    this.videoId=this.activatedRoute.snapshot.params['videoId'];
    this.service.getVideo(this.videoId).subscribe(data=> {
      this.videoUrl = data.videoUrl;
      this.thumbnailUrl = data.thumbnailUrl;
      console.log(data.videoUrl);
    })
    this.saveVideoDetailsForm = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus,
    })
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];
  selectedFile!: File;
  selectedFileName!: string;
  videoId: string = '';
  fileSelected: Boolean | undefined;
  videoUrl!: string;
  thumbnailUrl!: string;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(value: string): void {
    const index = this.tags.indexOf(value);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(val: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(val);
      return;
    }

    // Edit existing fruit
    const index = this.tags.indexOf(val);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }


  onFileSelected(event: Event){
    //@ts-ignore
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.fileSelected = true;
  }

  uploadThumbnail(){
    this.service.uploadThumbnail(this.selectedFile, this.videoId).subscribe(data => {
      console.log("Thumbnail Uploaded!!!", data);
      this._snackBar.open("Thumbnail Uploaded!!", "OK");
    })
  }


  uploadDetails(){
    const videoMetaData : VideoDto = {
      "id": this.videoId,
      "title": this.saveVideoDetailsForm.get("title")?.value,
      "description": this.saveVideoDetailsForm.get("description")?.value,
      "tags": this.tags,
      "videoStatus": this.saveVideoDetailsForm.get("videoStatus")?.value,
      "videoUrl": this.videoUrl,
      "thumbnailUrl": this.thumbnailUrl
    }
    this.service.saveVideoDetails(videoMetaData).subscribe(data=> {
      console.log(data);
      this._snackBar.open("Video Details saved!!", "OK");
    })
  }


  saveVideoDetailsForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('');



  ngOnInit(): void {
  }

}
