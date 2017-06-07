import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-users-followers',
  templateUrl: './git-users-followers.component.html',
  styleUrls: ['./git-users-followers.component.css']
})
export class GitUsersFollowersComponent implements OnInit {
  
  constructor() { }
    
  onSubmit(f){
    console.log(f);
  }
  ngOnInit() {
  }

 

}
