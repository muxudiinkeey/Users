import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  base_url = ('http://localhost:3000/');
  http = inject(HttpClient)


}
