import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  
  userServer = inject (UserService);
  userService = inject (UserService)
  users: Iuser[]=[]
  
  ngOnInit(): void {
      this.ongetUsers();
  }
  ongetUsers(){
    return this.userService.getUsers().subscribe((Iuser)=>{
   this.users = Iuser;
    })
  }

}
