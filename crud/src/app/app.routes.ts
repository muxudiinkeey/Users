import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'crud' },
    { path: 'crud', component: CrudComponent },
    { path: 'adduser', component: AddUserComponent},
    { path: 'updateuser/:id', component: UpdateUserComponent},
    { path: 'viewuser/:id', component: ViewUserComponent},
    { path: 'usersList', component: UsersListComponent },

    { path: '**', component: PageNotFoundComponent },
    
];
