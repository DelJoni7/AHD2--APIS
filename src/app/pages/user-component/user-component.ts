import { Component, inject, OnInit, signal} from '@angular/core';
import { UserService } from '../../ServiceGen/services/user';
import { User } from '../../ModelsGen/models/user';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent implements OnInit {

  private ServicioUsuario = inject(UserService);

  users = signal<User[]>([]);

  ngOnInit(): void {
    this.ServicioUsuario.ObtenerTodosLosUsuarios().subscribe({
      next: (datos) => {
        this.users.set(datos);
      }
    })
  } 

}
