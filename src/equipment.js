export class Equipment {

    constructor(atkmod, defmod){
        this._atkmod = atkmod;
        this._defmod = defmod;
    }

    get atkmod(){
        return this._atkmod;
    }
    get defmod(){
        return this._defmod;
    }

    set atkmod(x){
        this._atkmod = x;
    }
    set defmod(x){
        this._defmod = x;
    }

}