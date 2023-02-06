import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from "../components/upload-video/UploadVideoResponse";
import { CommentDto } from '../models/comment-dto';
import { VideoDto } from '../models/video-dto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  base_url: string = "http://localhost:8080/api/video"
  id: String = ""

  constructor(private http: HttpClient, private uservice: UserService) { }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse>{

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    return this.http.post<UploadVideoResponse>(this.base_url, formData);
  }


  getAllComments(videoId: string): Observable<Array<CommentDto>> {
    return this.http.get<Array<CommentDto>>(`${this.base_url}/comments/${videoId}`);
  }
  

  uploadThumbnail(fileEntry: File, videoId: string){
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    return this.http.post<UploadVideoResponse>(`${this.base_url}/thumbnail/${videoId}`, formData);
  }

  getVideo(videoId: String): Observable<VideoDto>{
    return this.http.get<VideoDto>(`${this.base_url}/${videoId}`);
  }


  saveVideoDetails(videoMetaData: VideoDto): Observable<VideoDto>{
    return this.http.put<VideoDto>(this.base_url, videoMetaData);
  }

  getAllVideos(): Observable<Array<VideoDto>>{
      return this.http.get<Array<VideoDto>>(this.base_url);
  }

  likeVideo(videoId: string): Observable<VideoDto> {
    return this.http.post<VideoDto>(`${this.base_url}/like/${videoId}`, null);
  }

  dislikeVideo(videoId: string): Observable<VideoDto> {
    return this.http.post<VideoDto>(`${this.base_url}/dislike/${videoId}`, null);
  }

  postComment(commentDto: any, videoId: string): Observable<any>{
    return this.http.post<any>(`${this.base_url}/comment/${videoId}`, commentDto);
  }

  getVideosByUserId(): Observable<Array<VideoDto>>{
    this.id= this.uservice.userid;
    return this.http.get<Array<VideoDto>>(`${this.base_url}/user-videos/${this.id}`);
  }
}
