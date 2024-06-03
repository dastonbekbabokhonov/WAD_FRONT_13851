import { Component, inject } from '@angular/core';
import { WorkoutCreateComponent } from '../../../app/components/workout-create/workout-create.component';
import { Workout } from '../../../interfaces/workout.interface';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../../services/workout.service';

@Component({
  selector: 'app-workout-edit',
  standalone: true,
  imports: [WorkoutCreateComponent],
  templateUrl: './workout-edit.component.html',
  styleUrl: './workout-edit.component.scss',
})
export class WorkoutEditComponent {
  workoutDetail: Workout = {
    id: 0,
    activityType: "",
    distance: 0,
    duration: 0,
    caloriesBurned: 0,
  };

  activatedRoute = inject(ActivatedRoute);
  workoutService = inject(WorkoutService);

  ngOnInit() {
    this.workoutService
      .getWorkoutDetail(this.activatedRoute.snapshot.params['id'])
      .subscribe((workout) => {
        this.workoutDetail = workout;
      });
  }
}
