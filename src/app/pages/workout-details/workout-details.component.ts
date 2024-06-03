import { Component, inject } from '@angular/core';
import { DetailComponent } from '../../components/detail/detail.component';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../../services/workout.service';
import { Workout } from '../../../interfaces/workout.interface';

@Component({
  selector: 'app-workout-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './workout-details.component.html',
  styleUrl: './workout-details.component.scss'
})
export class WorkoutDetailsComponent {
  workoutDetail: Workout = {
    id: 0,
    activityType: '',
    distance: 0,
    caloriesBurned: 0,
    duration: 0,

}


  activatedRoute = inject(ActivatedRoute)
  workoutService = inject(WorkoutService)

  ngOnInit() {
    this.workoutService.getWorkoutDetail(this.activatedRoute.snapshot.params["id"]).subscribe((workout)=>{
    this.workoutDetail = workout  
    });
  }
}
