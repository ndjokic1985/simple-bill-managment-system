const mongoose = require('mongoose');

class Database {
    constructor(connectionString) {
        this.connectionString = connectionString
    }
    connect() {
        return mongoose.connect(this.connectionString);
    }
}

module.exports = Database;