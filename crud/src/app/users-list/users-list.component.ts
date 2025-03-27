import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  
 
  users: Iuser[]=[]
  
  ngOnInit(){

  }


}
