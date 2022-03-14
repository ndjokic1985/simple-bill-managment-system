const mongoose = require('mongoose');

class Database {
    connect() {
        return mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    }
}

module.exports = Database;