import { Injectable } from '@angular/core';
import { Picture } from './models/picture';
import { Album } from './models/album';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private picturesList: Picture[] = [
    { id: 1, linkToPicture: "../assets/fot_cosp1.jpg", linkToMiniature: "../assets/fot_cosp1m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 2, linkToPicture: "../assets/fot_cosp2.jpg", linkToMiniature: "../assets/fot_cosp2m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 3, linkToPicture: "../assets/fot_cosp3.jpg", linkToMiniature: "../assets/fot_cosp3m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 4, linkToPicture: "../assets/fot_cosp4.jpg", linkToMiniature: "../assets/fot_cosp4m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 5, linkToPicture: "../assets/fot_cosp5.jpg", linkToMiniature: "../assets/fot_cosp5m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 6, linkToPicture: "../assets/fot_cosp6.jpg", linkToMiniature: "../assets/fot_cosp6m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 7, linkToPicture: "../assets/fot_cosp7.jpg", linkToMiniature: "../assets/fot_cosp7m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 8, linkToPicture: "../assets/fot_cosp8.jpg", linkToMiniature: "../assets/fot_cosp8m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 9, linkToPicture: "../assets/fot_cosp9.jpg", linkToMiniature: "../assets/fot_cosp9m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 10, linkToPicture: "../assets/fot_cosp10.jpg", linkToMiniature: "../assets/fot_cosp10m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 11, linkToPicture: "../assets/fot_cosp11.jpg", linkToMiniature: "../assets/fot_cosp11m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 12, linkToPicture: "../assets/fot_cosp12.jpg", linkToMiniature: "../assets/fot_cosp12m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 13, linkToPicture: "../assets/fot_cosp13.jpg", linkToMiniature: "../assets/fot_cosp13m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 14, linkToPicture: "../assets/fot_cosp14.jpg", linkToMiniature: "../assets/fot_cosp14m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 15, linkToPicture: "../assets/fot_cosp15.jpg", linkToMiniature: "../assets/fot_cosp15m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 16, linkToPicture: "../assets/fot_cosp16.jpg", linkToMiniature: "../assets/fot_cosp16m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },

    { id: 19, linkToPicture: "../assets/fot_cosp19.jpg", linkToMiniature: "../assets/fot_cosp19m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 20, linkToPicture: "../assets/fot_cosp20.jpg", linkToMiniature: "../assets/fot_cosp20m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 21, linkToPicture: "../assets/fot_cosp21.jpg", linkToMiniature: "../assets/fot_cosp21m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 22, linkToPicture: "../assets/fot_cosp22.jpg", linkToMiniature: "../assets/fot_cosp22m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 23, linkToPicture: "../assets/fot_cosp23.jpg", linkToMiniature: "../assets/fot_cosp23m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 24, linkToPicture: "../assets/fot_cosp24.jpg", linkToMiniature: "../assets/fot_cosp24m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 25, linkToPicture: "../assets/fot_cosp25.jpg", linkToMiniature: "../assets/fot_cosp25m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 26, linkToPicture: "../assets/fot_cosp26.jpg", linkToMiniature: "../assets/fot_cosp26m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 27, linkToPicture: "../assets/fot_cosp27.jpg", linkToMiniature: "../assets/fot_cosp27m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 28, linkToPicture: "../assets/fot_cosp28.jpg", linkToMiniature: "../assets/fot_cosp28m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 29, linkToPicture: "../assets/fot_cosp29.jpg", linkToMiniature: "../assets/fot_cosp29m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },
    { id: 30, linkToPicture: "../assets/fot_cosp30.jpg", linkToMiniature: "../assets/fot_cosp30m.jpg", description: "cosplay", date: "03.07.2018", albumId: 1 },

   { id: 31, linkToPicture: "../assets/land_1.jpg", linkToMiniature: "../assets/land_1m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 32, linkToPicture: "../assets/land_2.jpg", linkToMiniature: "../assets/land_2m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 33, linkToPicture: "../assets/land_3.jpg", linkToMiniature: "../assets/land_3m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 34, linkToPicture: "../assets/land_4.jpg", linkToMiniature: "../assets/land_4m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 35, linkToPicture: "../assets/land_5.jpg", linkToMiniature: "../assets/land_5m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 36, linkToPicture: "../assets/land_6.jpg", linkToMiniature: "../assets/land_6m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 37, linkToPicture: "../assets/land_7.jpg", linkToMiniature: "../assets/land_7m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 38, linkToPicture: "../assets/land_8.jpg", linkToMiniature: "../assets/land_8m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 39, linkToPicture: "../assets/land_9.jpg", linkToMiniature: "../assets/land_9m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 40, linkToPicture: "../assets/land_10.jpg", linkToMiniature: "../assets/land_10m.jpg", description: "landscape", date: "03.07.2018", albumId: 2},
   { id: 41, linkToPicture: "../assets/land_11.jpg", linkToMiniature: "../assets/land_11m.jpg", description: "landscape", date: "03.07.2018", albumId: 2},
   { id: 42, linkToPicture: "../assets/land_12.jpg", linkToMiniature: "../assets/land_12m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 43, linkToPicture: "../assets/land_13.jpg", linkToMiniature: "../assets/land_13m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 44, linkToPicture: "../assets/land_14.jpg", linkToMiniature: "../assets/land_14m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },
   { id: 45, linkToPicture: "../assets/land_15.jpg", linkToMiniature: "../assets/land_15m.jpg", description: "landscape", date: "03.07.2018", albumId: 2 },


   { id: 46, linkToPicture: "../assets/portret_1.jpg", linkToMiniature: "../assets/portret_1m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 47, linkToPicture: "../assets/portret_2.jpg", linkToMiniature: "../assets/portret_2m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 48, linkToPicture: "../assets/portret_3.jpg", linkToMiniature: "../assets/portret_3m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 49, linkToPicture: "../assets/portret_4.jpg", linkToMiniature: "../assets/portret_4m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 50, linkToPicture: "../assets/portret_5.jpg", linkToMiniature: "../assets/portret_5m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 51, linkToPicture: "../assets/portret_6.jpg", linkToMiniature: "../assets/portret_6m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 52, linkToPicture: "../assets/portret_7.jpg", linkToMiniature: "../assets/portret_7m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 53, linkToPicture: "../assets/portret_8.jpg", linkToMiniature: "../assets/portret_8m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 54, linkToPicture: "../assets/portret_9.jpg", linkToMiniature: "../assets/portret_9m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 55, linkToPicture: "../assets/portret_10.jpg", linkToMiniature: "../assets/portret_10m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 56, linkToPicture: "../assets/portret_11.jpg", linkToMiniature: "../assets/portret_11m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 57, linkToPicture: "../assets/portret_12.jpg", linkToMiniature: "../assets/portret_12m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 58, linkToPicture: "../assets/portret_13.jpg", linkToMiniature: "../assets/portret_13m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 59, linkToPicture: "../assets/portret_14.jpg", linkToMiniature: "../assets/portret_14m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 60, linkToPicture: "../assets/portret_15.jpg", linkToMiniature: "../assets/portret_15m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 61, linkToPicture: "../assets/portret_16.jpg", linkToMiniature: "../assets/portret_16m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 62, linkToPicture: "../assets/portret_17.jpg", linkToMiniature: "../assets/portret_17m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 63, linkToPicture: "../assets/portret_18.jpg", linkToMiniature: "../assets/portret_18m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 64, linkToPicture: "../assets/portret_19.jpg", linkToMiniature: "../assets/portret_19m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 65, linkToPicture: "../assets/portret_20.jpg", linkToMiniature: "../assets/portret_20m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 66, linkToPicture: "../assets/portret_21.jpg", linkToMiniature: "../assets/portret_21m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 67, linkToPicture: "../assets/portret_22.jpg", linkToMiniature: "../assets/portret_22m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 68, linkToPicture: "../assets/portret_23.jpg", linkToMiniature: "../assets/portret_23m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 69, linkToPicture: "../assets/portret_24.jpg", linkToMiniature: "../assets/portret_24m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },
   { id: 70, linkToPicture: "../assets/portret_25.jpg", linkToMiniature: "../assets/portret_25m.jpg", description: "portret", date: "03.07.2018", albumId: 3 },

   { id: 71, linkToPicture: "../assets/Graph_1.jpg", linkToMiniature: "../assets/Graph_1m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 72, linkToPicture: "../assets/Graph_2.jpg", linkToMiniature: "../assets/Graph_2m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 73, linkToPicture: "../assets/Graph_3.jpg", linkToMiniature: "../assets/Graph_3m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 74, linkToPicture: "../assets/Graph_4.jpg", linkToMiniature: "../assets/Graph_4m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 75, linkToPicture: "../assets/Graph_5.jpg", linkToMiniature: "../assets/Graph_5m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 76, linkToPicture: "../assets/Graph_6.jpg", linkToMiniature: "../assets/Graph_6m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 77, linkToPicture: "../assets/Graph_7.jpg", linkToMiniature: "../assets/Graph_7m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 78, linkToPicture: "../assets/Graph_8.jpg", linkToMiniature: "../assets/Graph_8m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 79, linkToPicture: "../assets/Graph_9.jpg", linkToMiniature: "../assets/Graph_9m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 80, linkToPicture: "../assets/Graph_10.jpg", linkToMiniature: "../assets/Graph_10m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 81, linkToPicture: "../assets/Graph_11.jpg", linkToMiniature: "../assets/Graph_11m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 82, linkToPicture: "../assets/Graph_12.jpg", linkToMiniature: "../assets/Graph_12m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 83, linkToPicture: "../assets/Graph_13.jpg", linkToMiniature: "../assets/Graph_13m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 84, linkToPicture: "../assets/Graph_14.jpg", linkToMiniature: "../assets/Graph_14m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 85, linkToPicture: "../assets/Graph_15.jpg", linkToMiniature: "../assets/Graph_15m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 86, linkToPicture: "../assets/Graph_16.jpg", linkToMiniature: "../assets/Graph_16m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 87, linkToPicture: "../assets/Graph_17.jpg", linkToMiniature: "../assets/Graph_17m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 88, linkToPicture: "../assets/Graph_18.jpg", linkToMiniature: "../assets/Graph_18m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 89, linkToPicture: "../assets/Graph_19.jpg", linkToMiniature: "../assets/Graph_19m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 90, linkToPicture: "../assets/Graph_20.jpg", linkToMiniature: "../assets/Graph_20m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
   { id: 91, linkToPicture: "../assets/Graph_21.jpg", linkToMiniature: "../assets/Graph_21m.jpg", description: "DigitalPainting", date: "03.07.2018", albumId: 4 },
  

   { id: 94, linkToPicture: "../assets/Graf_1.jpg", linkToMiniature: "../assets/Graf_1m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 95, linkToPicture: "../assets/Graf_2.jpg", linkToMiniature: "../assets/Graf_2m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 96, linkToPicture: "../assets/Graf_3.jpg", linkToMiniature: "../assets/Graf_3m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 97, linkToPicture: "../assets/Graf_4.jpg", linkToMiniature: "../assets/Graf_4m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 98, linkToPicture: "../assets/Graf_5.jpg", linkToMiniature: "../assets/Graf_5m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 99, linkToPicture: "../assets/Graf_6.jpg", linkToMiniature: "../assets/Graf_6m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 100, linkToPicture: "../assets/Graf_7.jpg", linkToMiniature: "../assets/Graf_7m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 101, linkToPicture: "../assets/Graf_8.jpg", linkToMiniature: "../assets/Graf_8m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 102, linkToPicture: "../assets/Graf_9.jpg", linkToMiniature: "../assets/Graf_9m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 103, linkToPicture: "../assets/Graf_10.jpg", linkToMiniature: "../assets/Graf_10m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 104, linkToPicture: "../assets/Graf_11.jpg", linkToMiniature: "../assets/Graf_11m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 105, linkToPicture: "../assets/Graf_12.jpg", linkToMiniature: "../assets/Graf_12m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 106, linkToPicture: "../assets/Graf_13.jpg", linkToMiniature: "../assets/Graf_13m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 107, linkToPicture: "../assets/Graf_14.jpg", linkToMiniature: "../assets/Graf_14m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 108, linkToPicture: "../assets/Graf_15.jpg", linkToMiniature: "../assets/Graf_15m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 109, linkToPicture: "../assets/Graf_16.jpg", linkToMiniature: "../assets/Graf_16m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 110, linkToPicture: "../assets/Graf_17.jpg", linkToMiniature: "../assets/Graf_17m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 111, linkToPicture: "../assets/Graf_18.jpg", linkToMiniature: "../assets/Graf_18m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 112, linkToPicture: "../assets/Graf_19.jpg", linkToMiniature: "../assets/Graf_19m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 113, linkToPicture: "../assets/Graf_20.jpg", linkToMiniature: "../assets/Graf_20m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 114, linkToPicture: "../assets/Graf_21.jpg", linkToMiniature: "../assets/Graf_21m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 115, linkToPicture: "../assets/Graf_22.jpg", linkToMiniature: "../assets/Graf_22m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 116, linkToPicture: "../assets/Graf_23.jpg", linkToMiniature: "../assets/Graf_23m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 117, linkToPicture: "../assets/Graf_24.jpg", linkToMiniature: "../assets/Graf_24m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 118, linkToPicture: "../assets/Graf_25.jpg", linkToMiniature: "../assets/Graf_25m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 119, linkToPicture: "../assets/Graf_26.jpg", linkToMiniature: "../assets/Graf_26m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 120, linkToPicture: "../assets/Graf_27.jpg", linkToMiniature: "../assets/Graf_27m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 121, linkToPicture: "../assets/Graf_28.jpg", linkToMiniature: "../assets/Graf_28m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 122, linkToPicture: "../assets/Graf_29.jpg", linkToMiniature: "../assets/Graf_29m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 123, linkToPicture: "../assets/Graf_30.jpg", linkToMiniature: "../assets/Graf_30m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 124, linkToPicture: "../assets/Graf_31.jpg", linkToMiniature: "../assets/Graf_31m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 125, linkToPicture: "../assets/Graf_32.jpg", linkToMiniature: "../assets/Graf_32m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 126, linkToPicture: "../assets/Graf_33.jpg", linkToMiniature: "../assets/Graf_33m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
   { id: 127, linkToPicture: "../assets/Graf_34.jpg", linkToMiniature: "../assets/Graf_34m.jpg", description: "Graphic", date: "03.07.2018", albumId: 4 },
  


   { id: 129, linkToPicture: "../assets/other_1.jpg", linkToMiniature: "../assets/other_1m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 130, linkToPicture: "../assets/other_2.jpg", linkToMiniature: "../assets/other_2m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 131, linkToPicture: "../assets/other_3.jpg", linkToMiniature: "../assets/other_3m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 132, linkToPicture: "../assets/other_4.jpg", linkToMiniature: "../assets/other_4m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 133, linkToPicture: "../assets/other_5.jpg", linkToMiniature: "../assets/other_5m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 134, linkToPicture: "../assets/other_6.jpg", linkToMiniature: "../assets/other_6m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 135, linkToPicture: "../assets/other_7.jpg", linkToMiniature: "../assets/other_7m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 136, linkToPicture: "../assets/other_8.jpg", linkToMiniature: "../assets/other_8m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 137, linkToPicture: "../assets/other_9.jpg", linkToMiniature: "../assets/other_9m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 138, linkToPicture: "../assets/other_10.jpg", linkToMiniature: "../assets/other_10m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 139, linkToPicture: "../assets/other_11.jpg", linkToMiniature: "../assets/other_11m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 140, linkToPicture: "../assets/other_12.jpg", linkToMiniature: "../assets/other_12m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 141, linkToPicture: "../assets/other_13.jpg", linkToMiniature: "../assets/other_13m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 142, linkToPicture: "../assets/other_14.jpg", linkToMiniature: "../assets/other_14m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 143, linkToPicture: "../assets/other_15.jpg", linkToMiniature: "../assets/other_15m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 144, linkToPicture: "../assets/other_16.jpg", linkToMiniature: "../assets/other_16m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 145, linkToPicture: "../assets/other_17.jpg", linkToMiniature: "../assets/other_17m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 146, linkToPicture: "../assets/other_18.jpg", linkToMiniature: "../assets/other_18m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },
   { id: 147, linkToPicture: "../assets/other_19.jpg", linkToMiniature: "../assets/other_19m.jpg", description: "Other", date: "03.07.2018", albumId: 5 },

   { id: 148, linkToPicture: "../assets/Arriva0.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 149, linkToPicture: "../assets/Arriva1.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 150, linkToPicture: "../assets/Arriva2.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 151, linkToPicture: "../assets/Arriva3.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 152, linkToPicture: "../assets/Arriva4.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 153, linkToPicture: "../assets/Arriva5.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 154, linkToPicture: "../assets/Arriva6.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },
   { id: 155, linkToPicture: "../assets/Arriva7.jpg", linkToMiniature: "", description: "Arriva", date: "03.07.2018", albumId: 6 },

   { id: 156, linkToPicture: "../assets/SDIP0.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 157, linkToPicture: "../assets/SDIP1.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 158, linkToPicture: "../assets/SDIP2.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 159, linkToPicture: "../assets/SDIP3.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 160, linkToPicture: "../assets/SDIP4.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 161, linkToPicture: "../assets/SDIP5.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 162, linkToPicture: "../assets/SDIP6.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },
   { id: 163, linkToPicture: "../assets/SDIP7.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 7 },


   { id: 165, linkToPicture: "../assets/Cafe0.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 166, linkToPicture: "../assets/Cafe1.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 167, linkToPicture: "../assets/Cafe2.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 168, linkToPicture: "../assets/Cafe3.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 169, linkToPicture: "../assets/Cafe4.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 170, linkToPicture: "../assets/Cafe5.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 171, linkToPicture: "../assets/Cafe6.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 172, linkToPicture: "../assets/Cafe7.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 173, linkToPicture: "../assets/Cafe8.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },
   { id: 174, linkToPicture: "../assets/Cafe9.jpg", linkToMiniature: "", description: "Cafe", date: "03.07.2018", albumId: 8 },


   { id: 175, linkToPicture: "../assets/NV1.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 176, linkToPicture: "../assets/NV2.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 177, linkToPicture: "../assets/NV3.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 178, linkToPicture: "../assets/NV4.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 179, linkToPicture: "../assets/NV5.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 180, linkToPicture: "../assets/NV6.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 181, linkToPicture: "../assets/NV7.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 182, linkToPicture: "../assets/NV8.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   { id: 183, linkToPicture: "../assets/NV9.jpg", linkToMiniature: "", description: "SDIP", date: "03.07.2018", albumId: 9 },
   
   { id: 184, linkToPicture: "../assets/polly1.jpg", linkToMiniature: "", description: "polly", date: "03.07.2018", albumId: 10 },
   { id: 185, linkToPicture: "../assets/polly2.jpg", linkToMiniature: "", description: "polly", date: "03.07.2018", albumId: 10 },
   { id: 186, linkToPicture: "../assets/polly3.jpg", linkToMiniature: "", description: "polly", date: "03.07.2018", albumId: 10 },
   { id: 187, linkToPicture: "../assets/polly4.jpg", linkToMiniature: "", description: "polly", date: "03.07.2018", albumId: 10 },
   { id: 188, linkToPicture: "../assets/polly5.jpg", linkToMiniature: "", description: "polly", date: "03.07.2018", albumId: 10 },
   { id: 189, linkToPicture: "../assets/polly6.jpg", linkToMiniature: "", description: "polly", date: "03.07.2018", albumId: 10 },

   { id: 190, linkToPicture: "../assets/rotenso1.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 191, linkToPicture: "../assets/rotenso2.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 192, linkToPicture: "../assets/rotenso3.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 193, linkToPicture: "../assets/rotenso4.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 194, linkToPicture: "../assets/rotenso5.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 195, linkToPicture: "../assets/rotenso6.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 196, linkToPicture: "../assets/rotenso7.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 197, linkToPicture: "../assets/rotenso8.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },
   { id: 198, linkToPicture: "../assets/rotenso9.jpg", linkToMiniature: "", description: "rotenso", date: "03.07.2018", albumId: 11 },


   { id: 199, linkToPicture: "../assets/space0.jpg", linkToMiniature: "", description: "space", date: "03.07.2018", albumId: 12 },
   { id: 200, linkToPicture: "../assets/space1.jpg", linkToMiniature: "", description: "space", date: "03.07.2018", albumId: 12 },
   { id: 201, linkToPicture: "../assets/space2.jpg", linkToMiniature: "", description: "space", date: "03.07.2018", albumId: 12 },
   { id: 202, linkToPicture: "../assets/space3.jpg", linkToMiniature: "", description: "space", date: "03.07.2018", albumId: 12 },
   { id: 203, linkToPicture: "../assets/space4.jpg", linkToMiniature: "", description: "space", date: "03.07.2018", albumId: 12 },

   { id: 204, linkToPicture: "../assets/Voc1.jpg", linkToMiniature: "", description: "vocean", date: "03.07.2018", albumId: 13 },
   { id: 205, linkToPicture: "../assets/Voc2.jpg", linkToMiniature: "", description: "vocean", date: "03.07.2018", albumId: 13 },
   { id: 206, linkToPicture: "../assets/Voc3.jpg", linkToMiniature: "", description: "vocean", date: "03.07.2018", albumId: 13 },
   { id: 207, linkToPicture: "../assets/Voc4.jpg", linkToMiniature: "", description: "vocean", date: "03.07.2018", albumId: 13 },
   { id: 208, linkToPicture: "../assets/Voc5.jpg", linkToMiniature: "", description: "vocean", date: "03.07.2018", albumId: 13 },

   { id: 209, linkToPicture: "../assets/wesele0.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 210, linkToPicture: "../assets/wesele1.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 211, linkToPicture: "../assets/wesele2.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 212, linkToPicture: "../assets/wesele3.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 213, linkToPicture: "../assets/wesele4.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 214, linkToPicture: "../assets/wesele5.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 215, linkToPicture: "../assets/wesele6.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 216, linkToPicture: "../assets/wesele7.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 217, linkToPicture: "../assets/wesele8.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 218, linkToPicture: "../assets/wesele9.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 219, linkToPicture: "../assets/wesele10.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 220, linkToPicture: "../assets/wesele11.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },
   { id: 221, linkToPicture: "../assets/wesele12.jpg", linkToMiniature: "", description: "wedding", date: "03.07.2018", albumId: 14 },

  ];
    private albumList: Album[] = [
      {id: 1, description: "Cosplay album", name: "Cosplay photography", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album1m.jpg", showBigPictures: false, albumType: 3},
      {id: 2, description: "Landscape album", name: "Nature photos and landscape", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album2m.jpg", showBigPictures: false, albumType: 3},
      {id: 3, description: "Portrait album", name: "Portraits", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album3m.jpg", showBigPictures: false, albumType: 3},
      {id: 4, description: "Graphic Design album", name: "Graphic design, Illustration, Digital Painting, Branding, Infographics, Print design, Typography", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album4m.jpg", showBigPictures: false, albumType: 2},
      {id: 5, description: "Other album", name: "Album", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album5m.jpg", showBigPictures: false, albumType: 2},
      {id: 6, description: "Application 1 album", name: "Application for drivers", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album6m.jpg", showBigPictures: true, albumType: 1},
      {id: 7, description: "Application 2 album", name: "Website tracking the locations of busses", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album7m.jpg", showBigPictures: true, albumType: 1},
      {id: 8, description: "Application 3 album", name: "Creative Cafe", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album8m.jpg", showBigPictures: true, albumType: 1},
      {id: 9, description: "Application 4 album", name: "The voucher's purchase page", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album9m.jpg", showBigPictures: true, albumType: 1},
      {id: 10, description: "Application 5 album", name: "Payment monitoring application", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album10m.jpg", showBigPictures: true, albumType: 1},
      {id: 11, description: "Application 6 album", name: "Website of the air-conditioning brand", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album11m.jpg", showBigPictures: true, albumType: 1},
      {id: 12, description: "Application 7 album", name: "Game menu", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album12m.jpg", showBigPictures: true, albumType: 1},
      {id: 13, description: "Application 8 album", name: "Application supporting the work of teams", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album13m.jpg", showBigPictures: true, albumType: 1},
      {id: 14, description: "Application 9 album", name: "Wedding portal", date: "03.07.2018", linkToMainPictureMiniature: "../assets/album14m.jpg", showBigPictures: true, albumType: 1},

    ];




getAllAlbums(): Album[]{
  return this.albumList
}

getAllPictures(): Picture[]{
  return this.picturesList
}

// getPicturesByAlbums(id: number): Album[]{
//   let albumTemp: Album[];
//   for (let coverPicture of this.albumList){
//       if (id == coverPicture.id){
//           albumTemp.push(coverPicture);
//       }
//   }
//   return albumTemp
// }

getPictureListbyAlbumId(albumId: number): Picture[]{
  let picturesTemp: Picture[] = [];
  for (let singlePicture of this.picturesList){
      if (albumId == singlePicture.albumId){
          picturesTemp.push(singlePicture);
      }
  }
  return picturesTemp
}

getAlbumById(albumId: number): Album {
let albumTemp: Album;
for (let singleAlbum of this.albumList){
    if (albumId == singleAlbum.id){
      albumTemp = singleAlbum;
    }
}
return albumTemp
}

getAlbumsByAlbumType(albumType: number): Album[]{
let albumTypeTemp: Album[] = [];
for (let singleAlbum of this.albumList){
  if (albumType == singleAlbum.albumType){
    albumTypeTemp.push(singleAlbum)
  }
}
return albumTypeTemp
}

}