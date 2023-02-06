import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit{
  

  constructor(private uservice: UserService, private router: Router){
    this.uservice.registerUser();
    this.router.navigateByUrl('featured');
  }
  ngOnInit(): void {
   
  }


}
