import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentDto } from 'src/app/models/comment-dto';
import { UserService } from 'src/app/service/user.service';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  videoId!: string;
  comments : Array<CommentDto> = [];
  commentsForm!: FormGroup;

  constructor(private uservice: UserService, private route: ActivatedRoute, private service: VideoService, private matSnackBar: MatSnackBar){
    this.commentsForm = new FormGroup(
      { comment: new FormControl('comment'),
    })
    this.videoId = this.route.snapshot.params['videoId'];
  }
  ngOnInit(): void {
    this.getComments();
  }

  postComment(){
    const comment = this.commentsForm.get('comment')?.value;
    
    const commentDto = {
      "commentText" : comment,
      "authorId": this.uservice.getUserId()
    }
    this.service.postComment(commentDto, this.videoId).subscribe(data => {
      this.matSnackBar.open("Comment posted successfully!!", "OK");
      this.commentsForm.get('comment')?.reset;
      this.getComments();
    })
  }


  getComments(){
    this.service.getAllComments(this.videoId).subscribe(data => {
      this.comments = data;
    })
  }
}
