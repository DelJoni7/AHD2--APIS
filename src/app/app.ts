import { Component, signal } from '@angular/core';
import { UserComponent } from './pages/user-component/user-component';
import { PostsComponent } from './pages/pages/posts-component/posts-component';
import { AlbumComponent } from './pages/album-component/album-component';
import { TodosComponent } from './pages/todos-component/todos-component';
import { BuscarID } from './pages/buscar-id/buscar-id';

@Component({
  selector: 'app-root',
  imports: [UserComponent, PostsComponent, AlbumComponent, TodosComponent, BuscarID],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {} 