import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POST } from '../../ModelsGen/model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  //Metodo para obtener todos los usuarios de la API JSONPlaceholder
  ObtenerPosts(): Observable<POST[]>{
    return this.http.get<POST[]>(this.apiUrl);

    //Metodo Update Post


    //Metodo Registrar Post
  }
}