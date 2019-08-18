import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { GalleryService } from '../../shared/db-entities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  albumListTemp: Album[] = [];

  constructor(private galleryService: GalleryService, private route: ActivatedRoute) { }

  ngOnInit() {
    let albumId: number = +this.route.snapshot.paramMap.get('id');
    this.getAlbumsByAlbumType(albumId);
  }

  getAlbumsByAlbumType(albumType: number): void {
    this.albumListTemp = this.galleryService.getAlbumsByAlbumType(albumType);
  }
}
