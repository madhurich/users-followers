import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-git-users-followers',
  templateUrl: './git-users-followers.component.html',
  styleUrls: ['./git-users-followers.component.css']
})
export class GitUsersFollowersComponent implements OnInit {
  onSubmit;
  
  constructor(@Inject('gitUsers') private gitUsers) { }
    
  
  ngOnInit() {
      this.onSubmit = (f) => {
      console.log(f);
      this.gitUsers.getUsers(f.controls.inputUser.value)
                    .subscribe((user) => console.log(user));
    }
    

  }

 

}
