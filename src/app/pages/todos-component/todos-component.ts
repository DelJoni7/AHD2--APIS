import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../../ServiceGen/Todos/todos-service';
import { TodosModel } from '../../ModelsGen/Todos/todos-model';

@Component({
  selector: 'app-todos-component',
  imports: [],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.css',
})
export class TodosComponent {
  private ServiceTodos = inject(TodosService);

  todos = signal<TodosModel[]>([]);

  ngOnInit(): void {
    this.ServiceTodos.ObtenerTodos().subscribe({
      next: (datos) => {
        this.todos.set(datos);
      }
    })
  }
}
