import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { CrudService } from '../crud.service';
import { UserService } from '../users-list/user.service';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

  userService = inject (UserService)
users: Iuser[]=[]

ngOnInit(): void {
    this.getAllUsers();
}
getAllUsers(){
  return this.userService.getUsers().subscribe((Iuser)=>{
 this.users = Iuser;
  })
}
getUser(id: any){
  return this.userService.getUsers().subscribe((Iuser)=>{
 this.users = Iuser;
  })
}

addUser(){

}

}
