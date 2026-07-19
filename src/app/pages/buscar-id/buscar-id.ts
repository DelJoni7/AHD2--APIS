import { Component, inject, OnInit, signal } from '@angular/core';
import { UserS } from '../../ServiceGen/UserG/user';
import { User } from '../../ModelsGen/UserG/user';

@Component({
  selector: 'app-buscar-id',
  imports: [],
  templateUrl: './buscar-id.html',
  styleUrl: './buscar-id.css',
})
export class BuscarID {
  private ServicioUser = inject(UserS);

  Users = signal<User[]>([])

  buscar(id:string){

    this.ServicioUser
        .ObtenerUsersPorID(Number(id))   
        .subscribe({
          next: (datos) => {
            this.Users.set([datos])
          }
        })
  }
}
