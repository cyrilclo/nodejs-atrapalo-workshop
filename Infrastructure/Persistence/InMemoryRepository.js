const Repository = require('Infrastructure/Persistence/Repository');
const Promise = require("bluebird");
const collection = [];

class InMemoryRepository extends Repository {

    constructor() {
        super();
        this.validate();

    }

    save(model) {
        return new Promise((resolve, reject) => {

            let modelId = collection.length + 1;
            model.setId(modelId);
            model.
            if(collection.push(model)) {
                resolve(model);
            }
            else {
                reject('Impossible to add this model in the collection');
            }
        });
    }

    find(id) {
        return new Promise( function (resolve, reject) {
            if(typeof this.collection[id] === undefined) {
                reject();
            }
            else {
                resolve(this.collection[id]);
            }
        });
    }

    validate() {

    }
}

module.exports = InMemoryRepository;