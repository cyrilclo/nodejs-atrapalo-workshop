'use strict';

class BaseModel {
    constructor(){}

    setId(id){
        this._id = id;
    }

    setUreatedAt(createdAt){
        if(false === createdAt instanceof Date) {
            throw new TypeError("paramter must be an instance of Date");
        }

        this._createdAt = createdAt;
    }

    setUpdatedAt(updatedAt){
        if(false === updatedAt instanceof Date) {
            throw new TypeError("paramter must be an instance of Date");
        }

        this._updatedAt = updatedAt;
    }

    getId() {
        return this._id;
    }

    getCreatedAt() {
        return this._createdAt;
    }

    getUpdatedAt() {
        return this._updatedAt;
    }
}

module.exports = BaseModel;