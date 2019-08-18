export class Picture {

    id: number
    linkToPicture: string
    linkToMiniature: string
    albumId: number    
    
    constructor() {
    
        this.id = 0;
        this.linkToPicture = "";
        this.linkToMiniature = "";
        this.albumId= 0;
    }    
}