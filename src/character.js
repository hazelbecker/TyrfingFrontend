export class ACharacter {

    constructor(name, maxHP, currentHP, atk, def, weapon, armor, roomID){
        this._name = name;
        this._maxHP = maxHP;
        this._currentHP = currentHP;
        this._atk = atk;
        this._def = def;
        this._weapon = weapon;
        this._armor = armor;
        this._roomID = roomID;
    }

    get name(){
        return this._name;
    }
    get maxHP(){
        return this._maxHP;
    }
    get currentHP(){
        return this._currentHP;
    }
    get atk(){
        return this._atk;
    }
    get def(){
        return this._def;
    }
    get weapon(){
        return this._weapon;
    }
    get armor(){
        return this._armor;
    }
    get roomID(){
        return this._roomID;
    }

    set name(x){
        this._name = x;
    }
    set maxHP(x){
        this._maxHP = x;
    }
    set currentHP(x){
        this._currentHP = x;
    }
    set atk(x){
        this._atk = x;
    }
    set def(x){
        this._def = x;
    }
    set weapon(x){
        this._weapon = x;
    }
    set armor(x){
        this._armor = x;
    }
    set roomID(x){
        this._roomID = x;
    }

}