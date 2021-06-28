export class Room {

    constructor(roomID, enemy){
        this._roomID = roomID;
        this._enemy = enemy;
    }

    get roomID(){
        return this._roomID;
    }
    get enemy(){
        return this._enemy;
    }

    set roomID(x){
        this._roomID = x;
    }
    set enemy(x){
        this._enemy = x;
    }

}