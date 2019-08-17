import { Picture } from './picture';

export class Album {

    id: number;
    description: string;
    name: string;
    date: string;
    linkToMainPictureMiniature: string;
    showBigPictures: boolean;
    albumType: number;

    
        constructor() {
        
            this.id = 0;
            this.description = "";
            this.name = "";
            this.date = "";
            this.linkToMainPictureMiniature = "";
            this.showBigPictures = false;
            this.albumType = 0;
        }    
}