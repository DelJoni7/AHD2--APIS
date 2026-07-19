import { Component, inject, signal } from '@angular/core';
import { AlbumService } from '../../ServiceGen/Album/album-service';
import { AlbumModel } from '../../ModelsGen/Album/album-model';

@Component({
  selector: 'app-album-component',
  imports: [],
  templateUrl: './album-component.html',
  styleUrl: './album-component.css',
})
export class AlbumComponent {
  private ServicioAlbum = inject(AlbumService);

  Albums = signal<AlbumModel[]>([]);

  ngOnInit(): void {
    this.ServicioAlbum.ObtenerAlbums().subscribe({
      next: (datos) => {
        this.Albums.set(datos);
      }
    })
  }
}
