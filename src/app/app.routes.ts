import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/users/users.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { WorkoutDetailsComponent } from './pages/workout-details/workout-details.component';
import { UsersCreateComponent } from './pages/users-create/users-create.component';
import { WorkoutsCreateComponent } from './pages/workout-create/workout-create.component';
import { WorkoutEditComponent } from './pages/workout-edit/workout-edit.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';

export const routes: Routes = [
    {   path: '',   
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"user",
        component: UsersComponent
    },
    {
        path:"user/:id",
        component: UsersDetailsComponent
    },
    {
        path:"user/:id/edit",
        component: UsersEditComponent
    },
    {
        path:"user-create",
        component: UsersCreateComponent
    },
    {
        path:"workout",
        component: WorkoutComponent
    },
    {
        path:"workout/:id",
        component: WorkoutDetailsComponent
    },
    {
        path:"workout/:id/edit",
        component: WorkoutEditComponent
    },
    {
        path:"workout-create",
        component: WorkoutsCreateComponent
    },
    { 
        path: '**', 
        component: PageNotFoundComponent
    },
];
