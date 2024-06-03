import { Component } from '@angular/core';
import { WorkoutCreateComponent } from '../../components/workout-create/workout-create.component';
import { UserCreateComponent } from '../../components/user-create/user-create.component';

@Component({
    selector: 'app-users-create',
    standalone: true,
    templateUrl: './users-create.component.html',
    styleUrl: './users-create.component.scss',
    imports: [UserCreateComponent, WorkoutCreateComponent]
})
export class UsersCreateComponent {

}
