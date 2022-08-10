import ObjectIdManager from "./ObjectIdManager";
import UuidManager from "./UuidManager";

export default class IdManager{
    constructor(){}
    uuidManager(){
        return UuidManager
    }
    objectIdManager(){
        return ObjectIdManager
    }
}