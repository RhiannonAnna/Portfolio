export class Picture {

    id: number
    linkToPicture: string
    linkToMiniature: string
    description: string
    date: string
    albumId: number
    
    
    constructor() {
    
        this.id = 0;
        this.linkToPicture = "";
        this.linkToMiniature = "";
        this.description = "";
        this.date = "";
        this.albumId= 0;
    }
    
    }