import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/db-entities.service';
import { ActivatedRoute } from '@angular/router';
import { Picture } from '../../models/picture';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  picturesListTemp: Picture[] = [];
  tempPicture = new Picture();
  album: Album;
  selectedPicture: Picture;

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) { }

  ngOnInit() {
    let albumId: number = +this.route.snapshot.paramMap.get('id');
    this.picturesListTemp = this.galleryService.getPictureListbyAlbumId(albumId);
    this.album = this.galleryService.getAlbumById(albumId);
  }

  selectPicture(id: number): void {
    for (let picturesTemp of this.picturesListTemp) {
      if (id == picturesTemp.id) {
        this.selectedPicture = picturesTemp;
      }
    }
  }

  closePicture(): void {
    this.selectedPicture = null;
  }
}

