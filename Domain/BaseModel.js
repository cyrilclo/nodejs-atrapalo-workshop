'use strict';

class BaseModel {
    constructor(createdAt, updatedAt = null, deletedAt = null){
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._deletedAt = deletedAt;
    }

    getCreatedAt() {
        return this._createdAt;
    }

    getUpdatedAt() {
        return this._updatedAt;
    }

    getDeletedAt() {
        return this._deletedAt;
    }
}

module.exports = BaseModel;