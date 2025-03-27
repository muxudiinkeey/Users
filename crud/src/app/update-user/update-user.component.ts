import { Component ,inject, OnInit} from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../iuser';

@Component({
  selector: 'app-update-user',
  imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{


 
  activateRoute= inject (ActivatedRoute)
  id: string |null = null;
  users: Iuser[]=[]
  
  ngOnInit(){
    this.activateRoute.queryParamMap.subscribe((params)=>{
      this.id = params.get('id');
    })
  }



}

