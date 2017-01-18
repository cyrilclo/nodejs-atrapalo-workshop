let mongoose = require('mongoose');
let Schema = mongoose.Schema;

class MongoRepository {

    constructor() {
        this.schema = Schema;
    }
}

module.exports = MongoRepository;