import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  base_url = ('http://localhost:3000/users');
  http = inject(HttpClient)


  getUsers(){
    return this.http.get<Iuser[]>(this.base_url);
  }
}
