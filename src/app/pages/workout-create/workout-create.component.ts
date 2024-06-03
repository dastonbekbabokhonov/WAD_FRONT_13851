import { Component } from '@angular/core';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import { WorkoutCreateComponent } from '../../components/workout-create/workout-create.component';

@Component({
    selector: 'app-workouts-create',
    standalone: true,
    templateUrl: './workout-create.component.html',
    styleUrl: './workout-create.component.scss',
    imports: [UserCreateComponent, WorkoutCreateComponent]
})
export class WorkoutsCreateComponent {

}
