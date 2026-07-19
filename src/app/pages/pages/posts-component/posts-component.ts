import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../../ServiceGen/service/post-service';
import { POST } from '../../../ModelsGen/model/post';

@Component({
  selector: 'app-posts-component',
  imports: [],
  templateUrl: './posts-component.html',
  styleUrl: './posts-component.css',
})
export class PostsComponent {
    private PostService = inject(PostService);

  Posts = signal<POST[]>([]);

  ngOnInit(): void {
    this.PostService.ObtenerPosts().subscribe({
      next: (datos) => {
        this.Posts.set(datos);
      }
    })
  }
}
