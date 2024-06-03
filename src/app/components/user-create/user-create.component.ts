import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Users, UsersCreate } from '../../../interfaces/users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { WorkoutService } from '../../../services/workout.service';
import { Workout } from '../../../interfaces/workout.interface';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class UserCreateComponent {
  @Input()
  usersDetail!: Users;

  @Input()
  isEdit: boolean = false;

  router = inject(Router);
  usersService = inject(UsersService);
  workoutService = inject(WorkoutService);
  activatedRoute = inject(ActivatedRoute);

  createUsers: UsersCreate = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    height: 0,
    weight: 0,
    workoutId: null
  };
  errorObj: any;
  workouts: Workout[] = [];
  workoutId: number | null = 0;

  ngOnInit() {
    this.workoutService.getWorkout().subscribe((result) => {
      this.workouts = result;
    });
  }

  ngOnChanges() {
    this.createUsers = this.usersDetail;
    this.workoutId = this.createUsers.workoutId;
  }

  clearForm() {
    this.createUsers = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      height: 0,
      weight: 0,
      workoutId: null
    };
  }

  submitForm() {
    this.createUsers.workoutId = this.workoutId;
    if (this.isEdit) {
      this.usersService
        .updateUser(
          this.activatedRoute.snapshot.params['id'],
          this.createUsers
        )
        .subscribe(
          (_) => {
            alert('Users Updated');
            this.router.navigateByUrl('users');
          },
          (error) => {
            this.errorObj = error.error.errors;
          }
        );
    } else {
      this.usersService.createUser(this.createUsers).subscribe(
        (_) => {
          alert('Users created');
          this.router.navigateByUrl('users');
        },
        (error) => {
          this.errorObj = error.error.errors;
        }
      );
    }
  }
}
