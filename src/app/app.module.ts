import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NaviComponent } from './navi/navi.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlbumComponent } from './pages/album/album.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MaterialModule } from './shared/material.module';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NaviComponent,
    HomeComponent,
    ContactComponent,
    AlbumComponent,
    GalleryComponent,
    AboutmeComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
    StickyNavModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
