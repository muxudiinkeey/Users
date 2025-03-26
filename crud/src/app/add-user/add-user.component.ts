import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{

  fb= inject (FormBuilder);
  router = inject (Router);
 addUserForm : FormGroup;
  crud = inject (CrudService);
 constructor(){
  this.addUserForm = this.fb.group({
 name:[''],
 username:[''],
 email:[''],
  });

 };

  ngOnInit(): void {}
  
  onSubmit(){
    console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud');
    })
    
  

  }
  onCancel(){
    this.router.navigateByUrl('crud');
    }
 




}
