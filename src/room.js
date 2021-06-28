export class Room {

    constructor(roomID, enemy, loot){
        this._roomID = roomID;
        this._enemy = enemy;
        this._loot = loot;
    }

    get roomID(){
        return this._roomID;
    }
    get enemy(){
        return this._enemy;
    }
    get loot(){
        return this._loot
    }

    set roomID(x){
        this._roomID = x;
    }
    set enemy(x){
        this._enemy = x;
    }
    set loot(x){
        this._loot = x;
    }

}