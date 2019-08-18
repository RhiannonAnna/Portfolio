import { Injectable } from '@angular/core';
import { Picture } from '../models/picture';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private picturesList: Picture[] = [
    { id: 1, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp1.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp1m.jpg", albumId: 1 },
    { id: 2, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp2.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp2m.jpg", albumId: 1 },
    { id: 3, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp3.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp3m.jpg", albumId: 1 },
    { id: 4, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp4.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp4m.jpg", albumId: 1 },
    { id: 5, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp5.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp5m.jpg", albumId: 1 },
    { id: 6, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp6.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp6m.jpg", albumId: 1 },
    { id: 7, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp7.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp7m.jpg", albumId: 1 },
    { id: 8, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp8.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp8m.jpg", albumId: 1 },
    { id: 9, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp9.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp9m.jpg", albumId: 1 },
    { id: 10, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp10.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp10m.jpg", albumId: 1 },
    { id: 11, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp11.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp11m.jpg", albumId: 1 },
    { id: 12, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp12.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp12m.jpg", albumId: 1 },
    { id: 13, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp13.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp13m.jpg", albumId: 1 },
    { id: 14, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp14.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp14m.jpg", albumId: 1 },
    { id: 15, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp15.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp15m.jpg", albumId: 1 },
    { id: 16, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp16.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp16m.jpg", albumId: 1 },

    { id: 19, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp19.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp19m.jpg", albumId: 1 },
    { id: 20, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp20.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp20m.jpg", albumId: 1 },
    { id: 21, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp21.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp21m.jpg", albumId: 1 },
    { id: 22, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp22.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp22m.jpg", albumId: 1 },
    { id: 23, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp23.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp23m.jpg", albumId: 1 },
    { id: 24, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp24.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp24m.jpg", albumId: 1 },
    { id: 25, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp25.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp25m.jpg", albumId: 1 },
    { id: 26, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp26.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp26m.jpg", albumId: 1 },
    { id: 27, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp27.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp27m.jpg", albumId: 1 },
    { id: 28, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp28.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp28m.jpg", albumId: 1 },
    { id: 29, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp29.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp29m.jpg", albumId: 1 },
    { id: 30, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp30.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/fot_cosp30m.jpg", albumId: 1 },

    { id: 31, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_1.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_1m.jpg", albumId: 2 },
    { id: 32, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_2.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_2m.jpg", albumId: 2 },
    { id: 33, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_3.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_3m.jpg", albumId: 2 },
    { id: 34, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_4.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_4m.jpg", albumId: 2 },
    { id: 35, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_5.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_5m.jpg", albumId: 2 },
    { id: 36, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_6.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_6m.jpg", albumId: 2 },
    { id: 37, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_7.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_7m.jpg", albumId: 2 },
    { id: 38, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_8.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_8m.jpg", albumId: 2 },
    { id: 39, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_9.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_9m.jpg", albumId: 2 },
    { id: 40, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_10.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_10m.jpg", albumId: 2 },
    { id: 41, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_11.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_11m.jpg", albumId: 2 },
    { id: 42, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_12.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_12m.jpg", albumId: 2 },
    { id: 43, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_13.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_13m.jpg", albumId: 2 },
    { id: 44, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_14.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_14m.jpg", albumId: 2 },
    { id: 45, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_15.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/land_15m.jpg", albumId: 2 },


    { id: 46, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_1.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_1m.jpg", albumId: 3 },
    { id: 47, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_2.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_2m.jpg", albumId: 3 },
    { id: 48, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_3.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_3m.jpg", albumId: 3 },
    { id: 49, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_4.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_4m.jpg", albumId: 3 },
    { id: 50, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_5.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_5m.jpg", albumId: 3 },
    { id: 51, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_6.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_6m.jpg", albumId: 3 },
    { id: 52, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_7.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_7m.jpg", albumId: 3 },
    { id: 53, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_8.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_8m.jpg", albumId: 3 },
    { id: 54, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_9.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_9m.jpg", albumId: 3 },
    { id: 55, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_10.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_10m.jpg", albumId: 3 },
    { id: 56, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_11.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_11m.jpg", albumId: 3 },
    { id: 57, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_12.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_12m.jpg", albumId: 3 },
    { id: 58, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_13.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_13m.jpg", albumId: 3 },
    { id: 59, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_14.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_14m.jpg", albumId: 3 },
    { id: 60, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_15.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_15m.jpg", albumId: 3 },
    { id: 61, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_16.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_16m.jpg", albumId: 3 },
    { id: 62, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_17.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_17m.jpg", albumId: 3 },
    { id: 63, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_18.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_18m.jpg", albumId: 3 },
    { id: 64, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_19.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_19m.jpg", albumId: 3 },
    { id: 65, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_20.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_20m.jpg", albumId: 3 },
    { id: 66, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_21.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_21m.jpg", albumId: 3 },
    { id: 67, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_22.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_22m.jpg", albumId: 3 },
    { id: 68, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_23.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_23m.jpg", albumId: 3 },
    { id: 69, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_24.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_24m.jpg", albumId: 3 },
    { id: 70, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_25.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/portret_25m.jpg", albumId: 3 },

    { id: 71, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_1.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_1m.jpg", albumId: 4 },
    { id: 72, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_2.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_2m.jpg", albumId: 4 },
    { id: 73, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_3.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_3m.jpg", albumId: 4 },
    { id: 74, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_4.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_4m.jpg", albumId: 4 },
    { id: 75, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_5.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_5m.jpg", albumId: 4 },
    { id: 76, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_6.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_6m.jpg", albumId: 4 },
    { id: 77, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_7.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_7m.jpg", albumId: 4 },
    { id: 78, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_8.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_8m.jpg", albumId: 4 },
    { id: 79, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_9.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_9m.jpg", albumId: 4 },
    { id: 80, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_10.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_10m.jpg", albumId: 4 },
    { id: 81, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_11.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_11m.jpg", albumId: 4 },
    { id: 82, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_12.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_12m.jpg", albumId: 4 },
    { id: 83, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_13.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_13m.jpg", albumId: 4 },
    { id: 84, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_14.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_14m.jpg", albumId: 4 },
    { id: 85, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_15.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_15m.jpg", albumId: 4 },
    { id: 86, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_16.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_16m.jpg", albumId: 4 },
    { id: 87, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_17.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_17m.jpg", albumId: 4 },
    { id: 88, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_18.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_18m.jpg", albumId: 4 },
    { id: 89, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_19.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_19m.jpg", albumId: 4 },
    { id: 90, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_20.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_20m.jpg", albumId: 4 },
    { id: 91, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_21.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graph_21m.jpg", albumId: 4 },


    { id: 94, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_1.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_1m.jpg", albumId: 4 },
    { id: 95, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_2.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_2m.jpg", albumId: 4 },
    { id: 96, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_3.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_3m.jpg", albumId: 4 },
    { id: 97, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_4.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_4m.jpg", albumId: 4 },
    { id: 98, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_5.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_5m.jpg", albumId: 4 },
    { id: 99, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_6.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_6m.jpg", albumId: 4 },
    { id: 100, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_7.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_7m.jpg", albumId: 4 },
    { id: 101, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_8.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_8m.jpg", albumId: 4 },
    { id: 102, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_9.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_9m.jpg", albumId: 4 },
    { id: 103, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_10.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_10m.jpg", albumId: 4 },
    { id: 104, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_11.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_11m.jpg", albumId: 4 },
    { id: 105, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_12.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_12m.jpg", albumId: 4 },
    { id: 106, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_13.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_13m.jpg", albumId: 4 },
    { id: 107, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_14.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_14m.jpg", albumId: 4 },
    { id: 108, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_15.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_15m.jpg", albumId: 4 },
    { id: 109, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_16.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_16m.jpg", albumId: 4 },
    { id: 110, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_17.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_17m.jpg", albumId: 4 },
    { id: 111, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_18.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_18m.jpg", albumId: 4 },
    { id: 112, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_19.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_19m.jpg", albumId: 4 },
    { id: 113, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_20.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_20m.jpg", albumId: 4 },
    { id: 114, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_21.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_21m.jpg", albumId: 4 },
    { id: 115, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_22.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_22m.jpg", albumId: 4 },
    { id: 116, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_23.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_23m.jpg", albumId: 4 },
    { id: 117, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_24.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_24m.jpg", albumId: 4 },
    { id: 118, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_25.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_25m.jpg", albumId: 4 },
    { id: 119, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_26.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_26m.jpg", albumId: 4 },
    { id: 120, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_27.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_27m.jpg", albumId: 4 },
    { id: 121, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_28.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_28m.jpg", albumId: 4 },
    { id: 122, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_29.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_29m.jpg", albumId: 4 },
    { id: 123, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_30.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_30m.jpg", albumId: 4 },
    { id: 124, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_31.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_31m.jpg", albumId: 4 },
    { id: 125, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_32.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_32m.jpg", albumId: 4 },
    { id: 126, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_33.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_33m.jpg", albumId: 4 },
    { id: 127, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_34.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Graf_34m.jpg", albumId: 4 },



    { id: 129, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_1.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_1m.jpg", albumId: 5 },
    { id: 130, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_2.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_2m.jpg", albumId: 5 },
    { id: 131, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_3.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_3m.jpg", albumId: 5 },
    { id: 132, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_4.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_4m.jpg", albumId: 5 },
    { id: 133, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_5.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_5m.jpg", albumId: 5 },
    { id: 134, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_6.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_6m.jpg", albumId: 5 },
    { id: 135, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_7.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_7m.jpg", albumId: 5 },
    { id: 136, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_8.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_8m.jpg", albumId: 5 },
    { id: 137, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_9.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_9m.jpg", albumId: 5 },
    { id: 138, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_10.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_10m.jpg", albumId: 5 },
    { id: 139, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_11.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_11m.jpg", albumId: 5 },
    { id: 140, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_12.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_12m.jpg", albumId: 5 },
    { id: 141, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_13.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_13m.jpg", albumId: 5 },
    { id: 142, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_14.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_14m.jpg", albumId: 5 },
    { id: 143, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_15.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_15m.jpg", albumId: 5 },
    { id: 144, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_16.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_16m.jpg", albumId: 5 },
    { id: 145, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_17.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_17m.jpg", albumId: 5 },
    { id: 146, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_18.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_18m.jpg", albumId: 5 },
    { id: 147, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_19.jpg", linkToMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/other_19m.jpg", albumId: 5 },

    { id: 148, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva0.jpg", linkToMiniature: "", albumId: 6 },
    { id: 149, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva1.jpg", linkToMiniature: "", albumId: 6 },
    { id: 150, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva2.jpg", linkToMiniature: "", albumId: 6 },
    { id: 151, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva3.jpg", linkToMiniature: "", albumId: 6 },
    { id: 152, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva4.jpg", linkToMiniature: "", albumId: 6 },
    { id: 153, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva5.jpg", linkToMiniature: "", albumId: 6 },
    { id: 154, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva6.jpg", linkToMiniature: "", albumId: 6 },
    { id: 155, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Arriva7.jpg", linkToMiniature: "", albumId: 6 },

    { id: 156, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP0.jpg", linkToMiniature: "", albumId: 7 },
    { id: 157, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP1.jpg", linkToMiniature: "", albumId: 7 },
    { id: 158, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP2.jpg", linkToMiniature: "", albumId: 7 },
    { id: 159, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP3.jpg", linkToMiniature: "", albumId: 7 },
    { id: 160, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP4.jpg", linkToMiniature: "", albumId: 7 },
    { id: 161, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP5.jpg", linkToMiniature: "", albumId: 7 },
    { id: 162, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP6.jpg", linkToMiniature: "", albumId: 7 },
    { id: 163, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/SDIP7.jpg", linkToMiniature: "", albumId: 7 },


    { id: 165, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe0.jpg", linkToMiniature: "", albumId: 8 },
    { id: 166, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe1.jpg", linkToMiniature: "", albumId: 8 },
    { id: 167, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe2.jpg", linkToMiniature: "", albumId: 8 },
    { id: 168, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe3.jpg", linkToMiniature: "", albumId: 8 },
    { id: 169, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe4.jpg", linkToMiniature: "", albumId: 8 },
    { id: 170, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe5.jpg", linkToMiniature: "", albumId: 8 },
    { id: 171, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe6.jpg", linkToMiniature: "", albumId: 8 },
    { id: 172, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe7.jpg", linkToMiniature: "", albumId: 8 },
    { id: 173, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe8.jpg", linkToMiniature: "", albumId: 8 },
    { id: 174, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Cafe9.jpg", linkToMiniature: "", albumId: 8 },


    { id: 175, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV1.jpg", linkToMiniature: "", albumId: 9 },
    { id: 176, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV2.jpg", linkToMiniature: "", albumId: 9 },
    { id: 177, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV3.jpg", linkToMiniature: "", albumId: 9 },
    { id: 178, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV4.jpg", linkToMiniature: "", albumId: 9 },
    { id: 179, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV5.jpg", linkToMiniature: "", albumId: 9 },
    { id: 180, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV6.jpg", linkToMiniature: "", albumId: 9 },
    { id: 181, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV7.jpg", linkToMiniature: "", albumId: 9 },
    { id: 182, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV8.jpg", linkToMiniature: "", albumId: 9 },
    { id: 183, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/NV9.jpg", linkToMiniature: "", albumId: 9 },

    { id: 184, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/polly1.jpg", linkToMiniature: "", albumId: 10 },
    { id: 185, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/polly2.jpg", linkToMiniature: "", albumId: 10 },
    { id: 186, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/polly3.jpg", linkToMiniature: "", albumId: 10 },
    { id: 187, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/polly4.jpg", linkToMiniature: "", albumId: 10 },
    { id: 188, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/polly5.jpg", linkToMiniature: "", albumId: 10 },
    { id: 189, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/polly6.jpg", linkToMiniature: "", albumId: 10 },

    { id: 190, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso1.jpg", linkToMiniature: "", albumId: 11 },
    { id: 191, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso2.jpg", linkToMiniature: "", albumId: 11 },
    { id: 192, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso3.jpg", linkToMiniature: "", albumId: 11 },
    { id: 193, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso4.jpg", linkToMiniature: "", albumId: 11 },
    { id: 194, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso5.jpg", linkToMiniature: "", albumId: 11 },
    { id: 195, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso6.jpg", linkToMiniature: "", albumId: 11 },
    { id: 196, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso7.jpg", linkToMiniature: "", albumId: 11 },
    { id: 197, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso8.jpg", linkToMiniature: "", albumId: 11 },
    { id: 198, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/rotenso9.jpg", linkToMiniature: "", albumId: 11 },


    { id: 199, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/space0.jpg", linkToMiniature: "", albumId: 12 },
    { id: 200, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/space1.jpg", linkToMiniature: "", albumId: 12 },
    { id: 201, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/space2.jpg", linkToMiniature: "", albumId: 12 },
    { id: 202, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/space3.jpg", linkToMiniature: "", albumId: 12 },
    { id: 203, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/space4.jpg", linkToMiniature: "", albumId: 12 },

    { id: 204, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Voc1.jpg", linkToMiniature: "", albumId: 13 },
    { id: 205, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Voc2.jpg", linkToMiniature: "", albumId: 13 },
    { id: 206, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Voc3.jpg", linkToMiniature: "", albumId: 13 },
    { id: 207, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Voc4.jpg", linkToMiniature: "", albumId: 13 },
    { id: 208, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/Voc5.jpg", linkToMiniature: "", albumId: 13 },

    { id: 209, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele0.jpg", linkToMiniature: "", albumId: 14 },
    { id: 210, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele1.jpg", linkToMiniature: "", albumId: 14 },
    { id: 211, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele2.jpg", linkToMiniature: "", albumId: 14 },
    { id: 212, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele3.jpg", linkToMiniature: "", albumId: 14 },
    { id: 213, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele4.jpg", linkToMiniature: "", albumId: 14 },
    { id: 214, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele5.jpg", linkToMiniature: "", albumId: 14 },
    { id: 215, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele6.jpg", linkToMiniature: "", albumId: 14 },
    { id: 216, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele7.jpg", linkToMiniature: "", albumId: 14 },
    { id: 217, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele8.jpg", linkToMiniature: "", albumId: 14 },
    { id: 218, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele9.jpg", linkToMiniature: "", albumId: 14 },
    { id: 219, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele10.jpg", linkToMiniature: "", albumId: 14 },
    { id: 220, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele11.jpg", linkToMiniature: "", albumId: 14 },
    { id: 221, linkToPicture: "http://rhiannonarts.pl/wp-content/uploads/2019/08/wesele12.jpg", linkToMiniature: "", albumId: 14 },

  ];
  private albumList: Album[] = [
    { id: 1, description: "Cosplay album", name: "Cosplay photography", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album1m.jpg", showBigPictures: false, albumType: 3 },
    { id: 2, description: "Landscape album", name: "Nature photos and landscape", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album2m.jpg", showBigPictures: false, albumType: 3 },
    { id: 3, description: "Portrait album", name: "Portraits", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album3m.jpg", showBigPictures: false, albumType: 3 },
    { id: 4, description: "Graphic Design album", name: "Graphic design, Illustration, Digital Painting, Branding, Infographics, Print design, Typography", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album4m.jpg", showBigPictures: false, albumType: 2 },
    { id: 5, description: "Other album", name: "Album", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album5m.jpg", showBigPictures: false, albumType: 2 },
    { id: 6, description: "Application 1 album", name: "Application for drivers", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album6m.jpg", showBigPictures: true, albumType: 1 },
    { id: 7, description: "Application 2 album", name: "Website tracking the locations of busses", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album7m.jpg", showBigPictures: true, albumType: 1 },
    { id: 8, description: "Application 3 album", name: "Creative Cafe", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album8m.jpg", showBigPictures: true, albumType: 1 },
    { id: 9, description: "Application 4 album", name: "The voucher's purchase page", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album9m.jpg", showBigPictures: true, albumType: 1 },
    { id: 10, description: "Application 5 album", name: "Payment monitoring application", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album10m.jpg", showBigPictures: true, albumType: 1 },
    { id: 11, description: "Application 6 album", name: "Website of the air-conditioning brand", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album11m.jpg", showBigPictures: true, albumType: 1 },
    { id: 12, description: "Application 7 album", name: "Game menu", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album12m.jpg", showBigPictures: true, albumType: 1 },
    { id: 13, description: "Application 8 album", name: "Application supporting the work of teams", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album13m.jpg", showBigPictures: true, albumType: 1 },
    { id: 14, description: "Application 9 album", name: "Wedding portal", linkToMainPictureMiniature: "http://rhiannonarts.pl/wp-content/uploads/2019/08/album14m.jpg", showBigPictures: true, albumType: 1 },

  ];

  getAllAlbums(): Album[] {
    return this.albumList
  }
  getAllPictures(): Picture[] {
    return this.picturesList
  }
  getPictureListbyAlbumId(albumId: number): Picture[] {
    let picturesTemp: Picture[] = [];
    for (let singlePicture of this.picturesList) {
      if (albumId == singlePicture.albumId) {
        picturesTemp.push(singlePicture);
      }
    }
    return picturesTemp
  }
  getAlbumById(albumId: number): Album {
    let albumTemp: Album;
    for (let singleAlbum of this.albumList) {
      if (albumId == singleAlbum.id) {
        albumTemp = singleAlbum;
      }
    }
    return albumTemp
  }
  getAlbumsByAlbumType(albumType: number): Album[] {
    let albumTypeTemp: Album[] = [];
    for (let singleAlbum of this.albumList) {
      if (albumType == singleAlbum.albumType) {
        albumTypeTemp.push(singleAlbum)
      }
    }
    return albumTypeTemp
  }
}