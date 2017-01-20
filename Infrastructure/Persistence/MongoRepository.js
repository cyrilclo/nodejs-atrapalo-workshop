let mongoose = require('mongoose');
const Repository = require('Infrastructure/Persistence/Repository');
let Schema = mongoose.Schema;

class MongoRepository extends Repository {

    constructor() {
        super();
        this.validate();
    }

    save(model) {
        return model.save();
    }

    find(id) {
        return this.model.findOne({'_id' : id });
    }

    validate() {
        if (typeof this.getModelName !== "function") {
            throw "Repository must implement getModelName() method";
        }
        if (typeof this.getSchema !== "function") {
            throw "Repository must implement getSchema() method";
        }
    }
}

module.exports = MongoRepository;