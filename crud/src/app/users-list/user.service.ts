import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = ('http://localhost:3000/users');
  http = inject(HttpClient)

 
  getUsers(){
    return this.http.get<Iuser[]>(this.base_url);
  };

  createUser(){
    return this.http.post('${this.base_url}/${id}', {})
  }
  UpdateUser(id: any){
    return this.http.put('${this.base_url}/${id}', id)
  }
}

