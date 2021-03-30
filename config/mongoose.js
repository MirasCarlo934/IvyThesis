var config = require("./config"),
    mongoose = require("mongoose");

module.exports = function() {
    var db = mongoose.connect(config.mongodb.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return db;
}
