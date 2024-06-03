import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../interfaces/users.interface';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent {
  usersDetail: Users = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    height: 0,
    weight: 0,
    workoutId: null,
    workout: null
  }

  activatedRoute = inject(ActivatedRoute)
  usersService = inject(UsersService)

  ngOnInit() {
    this.usersService.getUser(this.activatedRoute.snapshot.params["id"]).subscribe((users)=>{
    this.usersDetail = users;
    });
  }
}
