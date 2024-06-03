import { Workout } from "./workout.interface";

export interface Users extends UsersCreate {
    id: number;
    workout: Workout | null
}

export interface UsersCreate {
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    gender: string;
    height: number;
    weight: number;
    workoutId: number | null;
}