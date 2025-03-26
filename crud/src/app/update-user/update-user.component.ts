import { Component ,inject, OnInit} from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
crud = inject (CrudService);
activateRoute = inject (ActivatedRoute)
  userId!: {
    uid: number;
  };
ngOnInit(): void {
  this.userId = {
    uid : this.activateRoute.snapshot.params['id']
  }
  console.log(this.userId.uid)
}

onGetById(){


  //this.crud.getDataById()
}
}
