import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  //Metodo para obtener todos los usuarios de la API JSONPlaceholder
  ObtenerTodosLosUsuarios(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
}
