import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { Picture } from '../../models/picture';
import { GalleryService } from '../../gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  albumListTemp:  Album[] = [];

  constructor(private galleryService: GalleryService) {}


  ngOnInit() {
  }
 
  back(): void {
  this.albumListTemp = [];

}

selectAlbumsByAlbumType(albumType: number): void {
  this.albumListTemp = this.galleryService.getAlbumsByAlbumType(albumType);
}
}
