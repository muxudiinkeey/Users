import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../iuser';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit{
 
  activateRoute= inject (ActivatedRoute) 
  id: string |null = null;
  users: Iuser[]=[]
  
  ngOnInit(){
    this.activateRoute.paramMap.subscribe(params=>{
      this.id = params.get('id');
    }) 
  }

}
