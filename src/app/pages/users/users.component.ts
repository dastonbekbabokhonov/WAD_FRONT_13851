import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../interfaces/users.interface';
import { TableKey } from '../../../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  router = inject(Router)
  usersService = inject(UsersService)
  users: Users[] = []

  ngOnInit(){
    this.usersService.getUsers().subscribe((result)=>{
      this.users = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: "Id",
      key: 'id'   
    },
    {
      label: "Firstname",
      key: 'firstName'   
    },
    {
      label: "LastName",
      key: 'lastName'   
    },
    {
      label: "Date of Birth",
      key: 'dateOfBirth'   
    },
    {
      label:"gender",
      key:"gender",
    },
    {
      label:"height",
      key:"height",
    },
    {
      label:"Weight",
      key:"weight",
    }
  ];
}