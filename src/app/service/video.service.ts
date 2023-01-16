import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from "../components/upload-video/UploadVideoResponse";
import { VideoDto } from '../models/video-dto';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  base_url: string = "http://localhost:8080/api/video"

  constructor(private http: HttpClient) { }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse>{

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    return this.http.post<UploadVideoResponse>(this.base_url, formData);
  }

  uploadThumbnail(fileEntry: File, videoId: string){
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    return this.http.post<UploadVideoResponse>(`${this.base_url}/thumbnail/${videoId}`, formData);
  }

  getVideo(videoId: string): Observable<VideoDto>{
    return this.http.get<VideoDto>(`${this.base_url}/${videoId}`);
  }


  saveVideoDetails(videoMetaData: VideoDto): Observable<VideoDto>{
    return this.http.put<VideoDto>(this.base_url, videoMetaData);
  }
}
