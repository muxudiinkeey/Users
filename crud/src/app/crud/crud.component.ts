import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { UserService } from '../users-list/user.service';
import { CrudService } from './crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  
  crud= inject (CrudService);
  router = inject (Router)
apiData: Iuser[]=[];
user:any;
ngOnInit(): void {
    this.getAllData();
}
getAllData(){
  return this.crud.getData().subscribe((Iuser)=>{
 this.apiData= Iuser;
  })
}

addNewUser(){
this.router.navigateByUrl('adduser');
}

onUpdate(id:number){
  this.router.navigate(['updateuser', id] )
}

}
