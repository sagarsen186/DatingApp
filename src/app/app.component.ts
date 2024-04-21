
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';

  constructor(private accontService:AccountService){}
  ngOnInit(): void {
    this.setCurrentUser();
  }
 
setCurrentUser(){
  const userString=localStorage.getItem('user');
  if(!userString) return;
  const user:User=JSON.parse(userString);
  this.accontService.setCurrentUser(user);
    
}
}
