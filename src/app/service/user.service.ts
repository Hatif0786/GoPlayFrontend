import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  userid: string = '';
  base_url = "http://localhost:8080/api/user";
  constructor(private http: HttpClient) { }

  unsubscribeToUser(userId: String) {
    return this.http.post<Boolean>(`${this.base_url}/unsubscribe/${userId}`, null);
  }

  registerUser(): any {
    this.http.get(`${this.base_url}/register`, {responseType: "text"}).subscribe(data=> {
      this.userid=data;
    })
  }

  subscribeToUser(userId: String) : Observable<Boolean>{
    return this.http.post<Boolean>(`${this.base_url}/subscribe/${userId}`, null);
  }


  getUserId(): string{
    return this.userid;
  }

  getLikedVideos(): Observable<Array<String>> {
    return this.http.get<Array<String>>(`${this.base_url}/liked-videos/${this.userid}`)
  }


  getHistoryVideos(): Observable<Array<String>> {
    return this.http.get<Array<String>>(`${this.base_url}/history/${this.userid}`);
  }

  getSubscribedToUsers(): Observable<Array<String>>{
    return this.http.get<Array<String>>(`${this.base_url}/subscribed-to`);
  }

  getUserDetails(id: String): Observable<any>{
    return this.http.get(`${this.base_url}/${id}`);
  }


  getCurrentUser(): Observable<any>{
    return this.http.get(`${this.base_url}/current-user`);
  }


  uploadUserImage(fileEntry: File){
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    return this.http.post(`${this.base_url}/upload-userImage/${this.userid}`, formData);
  }


  saveToWatchLater(videoId: string): Observable<UserDto>{
      return this.http.get<UserDto>(`${this.base_url}/addto-saved-for-watch-later/${videoId}`);
  }

  removeFromSavedToWatchLater(videoId: string): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.base_url}/removefrom-saved-for-watch-later/${videoId}`);
  }

}
