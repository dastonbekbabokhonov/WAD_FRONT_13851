import { Component, inject } from '@angular/core';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../interfaces/users.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  standalone: true,
  imports: [UserCreateComponent],
  templateUrl: './users-edit.component.html',
  styleUrl: './users-edit.component.scss'
})
export class UsersEditComponent {
  usersDetail: Users = {
    id: 0 ,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    height: 0,
    weight: 0,
    workoutId: null,
    workout: null,
  }

  activatedRoute = inject(ActivatedRoute)
  usersService = inject(UsersService)

  ngOnInit() {
    this.usersService.getUser(this.activatedRoute.snapshot.params["id"]).subscribe((users)=>{
    this.usersDetail = users;
    });
  }
}
