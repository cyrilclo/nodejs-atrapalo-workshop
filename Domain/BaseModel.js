'use strict';

class BaseModel {
    constructor(){}

    set id(id){
        this._id = id;
    }

    set createdAt(createdAt){
        if(false === createdAt instanceof Date) {
            throw new TypeError("paramter must be an instance of Date");
        }

        this._createdAt = createdAt;
    }

    set updatedAt(updatedAt){
        if(false === updatedAt instanceof Date) {
            throw new TypeError("paramter must be an instance of Date");
        }

        this._updatedAt = updatedAt;
    }

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }
}

module.exports = BaseModel;