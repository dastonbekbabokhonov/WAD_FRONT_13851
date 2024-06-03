export interface Workout extends WorkoutCreate {
    id: number;
}


export interface WorkoutCreate {
    activityType: string;
    distance: number;
    duration: number;
    caloriesBurned: number;
}
