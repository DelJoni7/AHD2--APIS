import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TodosModel } from '../../ModelsGen/Todos/todos-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/todos";

  //Metodo para obtener todos los usuarios de la API JSONPlaceholder
  ObtenerTodos(): Observable<TodosModel[]>{
    return this.http.get<TodosModel[]>(this.apiUrl);
  }
}
