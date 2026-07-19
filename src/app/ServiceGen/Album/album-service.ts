import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from '../../ModelsGen/Album/album-model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
 private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/albums";

  //Metodo para obtener todos los usuarios de la API JSONPlaceholder
  ObtenerAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this.apiUrl);
  } 
}
