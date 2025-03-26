import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  }
  onCancel(){
    this.router.navigateByUrl('crud');
    }
 




}
