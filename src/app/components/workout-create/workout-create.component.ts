import { Component, Input, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../../../services/workout.service';
import { Workout, WorkoutCreate } from '../../../interfaces/workout.interface';

@Component({
  selector: 'app-workout-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './workout-create.component.html',
  styleUrl: './workout-create.component.scss'
})
export class WorkoutCreateComponent {
  @Input()
  workoutDetail!: Workout;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  workoutService = inject(WorkoutService)
  activatedRoute = inject(ActivatedRoute)

  createWorkout: WorkoutCreate = {
    activityType: '',
    distance: 0,
    duration: 0,
    caloriesBurned: 0,
  }
  errorObj: any;


  ngOnChanges() {
    this.createWorkout = this.workoutDetail;
  }

  clearForm() {
    this.createWorkout = {
      activityType: '',
      distance: 0,
      duration: 0,
      caloriesBurned: 0,
    }
  }

  submitForm() {
    if(this.isEdit) {
      this.workoutService.updateWorkout(this.activatedRoute.snapshot.params["id"], this.createWorkout).subscribe(_=>{
        alert("Workout Updated")
        this.router.navigateByUrl("workout");
      },
      error => {
        this.errorObj = error.error.errors;
      })
    }else{
      this.workoutService.createWorkout(this.createWorkout).subscribe(_=> {
        alert("Workout created")
        this.router.navigateByUrl("workout")
      },
      error => {
        this.errorObj = error.error.errors;
      });
    }
  }
}
