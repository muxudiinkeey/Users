import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'crud' },
    { path: 'crud', component: CrudComponent },
    { path: 'usersList', component: UsersListComponent },
    { path: '**', component: PageNotFoundComponent },
    
];
