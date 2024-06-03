import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../../../services/workout.service';
import { Workout } from '../../../interfaces/workout.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss'
})
export class WorkoutComponent {
  router = inject(Router)
  workoutService = inject(WorkoutService)
  workout: Workout[] = []

  ngOnInit(){
    this.workoutService.getWorkout().subscribe((result)=>{
      this.workout = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: "Id",
      key: 'id'   
    },
    {
      label: "Type",
      key: 'activityType'   
    },
    {
      label: "Distance",
      key: 'distance'   
    },
    {
      label: "Duration",
      key: 'duration'   
    },
    {
      label: "Calories Burned",
      key: 'caloriesBurned'   
    }
  ];
}
