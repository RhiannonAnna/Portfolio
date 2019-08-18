import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { Picture } from '../../models/picture';
import { GalleryService } from '../../shared/db-entities.service';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  albumListTemp: Album[] = [];

  constructor(private galleryService: GalleryService) { }


  ngOnInit() {
  }

  back(): void {
    this.albumListTemp = [];

  }

  selectAlbumsByAlbumType(albumType: number): void {
    this.albumListTemp = this.galleryService.getAlbumsByAlbumType(albumType);
  }
}
