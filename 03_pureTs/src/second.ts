interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {// before implementing the takePhotot the Instagram needs 3 characters
    constructor(
        //following protocol interface doesnt define the function
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    //this class follows two protocols before doing any other work
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Story was created");
        
    }
}