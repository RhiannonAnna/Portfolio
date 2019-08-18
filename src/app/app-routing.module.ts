import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AlbumComponent } from './pages/album/album.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'galleries', component: GalleriesComponent } ,
  { path: 'gallery/:id', component: GalleryComponent } ,
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'album/:id', component: AlbumComponent } ,
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
