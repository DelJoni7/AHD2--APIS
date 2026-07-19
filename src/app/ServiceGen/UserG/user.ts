import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../ModelsGen/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserS {
  private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor() { }

  ObttenerTodosLosUsuarios() {
    return this.http.get<User[]>(this.apiUrl);

  }

  ObtenerUsersPorID(id: number): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/${id}`
    )
  }
}