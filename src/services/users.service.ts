import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Users, UsersCreate } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

const BASE_URL = 'https://localhost:7045/api'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpClient = inject(HttpClient);

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${BASE_URL}/Users`)
  };

  getUser(id: number): Observable<Users>{
    return this.httpClient.get<Users>(`${BASE_URL}/Users/${id}`);
  };

  updateUser(id: number, workout: UsersCreate){
    return this.httpClient.put(`${BASE_URL}/Users/${id}`, workout);  
  };

  deleteUser(id:number){
    return this.httpClient.delete(`${BASE_URL}/Users/${id}`);
  };
  
  createUser(workout: UsersCreate): Observable<Users>{
    return this.httpClient.post<Users>(`${BASE_URL}/Users`, workout);
  };
}