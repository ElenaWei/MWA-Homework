export class LikeComponent{
    
    constructor(public LikeCount: number, public active: boolean){}
    onClick(){
        if(this.active)    
            return --this.LikeCount;       
        else
            return ++this.LikeCount;
    }
}
