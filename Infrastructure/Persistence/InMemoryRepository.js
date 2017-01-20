const Repository = require('Infrastructure/Persistence/Repository');

class InMemoryRepository extends Repository {

    constructor() {
        super();
        this.validate();
        this.collection = [];
    }

    save(model) {
        this.collection.push(model);

        return new Promise( function (resolve, reject) {
            resolve(model);
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
        if (typeof this.getModelName !== "function") {
            throw "Repository must implement getModelName() method";
        }
        if (typeof this.getSchema !== "function") {
            throw "Repository must implement getSchema() method";
        }
    }
}

module.exports = InMemoryRepository;