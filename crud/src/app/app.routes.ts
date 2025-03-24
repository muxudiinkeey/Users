import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'crud' },
    { path: 'crud', component: CrudComponent },
];
