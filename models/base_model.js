'use strict';

const mongoose = require('mongoose');


class BaseModel {
    constructor(createdAt, updatedAt = null, deletedAt = null){
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}

module.exports = BaseModel;