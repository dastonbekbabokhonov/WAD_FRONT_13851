import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Workout, WorkoutCreate } from '../interfaces/workout.interface';

const BASE_URL = 'https://localhost:7045/api'
@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  httpClient = inject(HttpClient);

  getWorkout(){
    return this.httpClient.get<Workout[]>(`${BASE_URL}/Workouts`)
  };

  getWorkoutDetail(id: number){
    return this.httpClient.get<Workout>(`${BASE_URL}/Workouts/${id}`);
  };

  updateWorkout(id: number, movie: WorkoutCreate){
    return this.httpClient.put(`${BASE_URL}/Workouts/${id}`, movie);  
  };

  deleteWorkout(id:number){
    return this.httpClient.delete(`${BASE_URL}/Workouts/${id}`);
  };

  createWorkout(movie: WorkoutCreate){
    return this.httpClient.post<Workout>(`${BASE_URL}/Workouts`, movie);
  };
}