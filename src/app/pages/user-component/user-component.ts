import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent implements OnInit {

  private ServicioUsuario = inject(UserService);

  users: User[] = [];

  ngOnInit(): void {
    this.ServicioUsuario.ObtenerTodosLosUsuarios().subscribe({
      next: (datos) => {
        this.users = datos;
      }
    })
  }

}
