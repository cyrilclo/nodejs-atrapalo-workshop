class Repository {
    constructor() {
        if (typeof this.save !== "function") {
            throw new TypeError("Repository must implement save() method");
        }
        if (typeof this.find !== "function") {
            throw new TypeError("Repository must implement find() method");
        }
    }
}

module.exports = Repository;