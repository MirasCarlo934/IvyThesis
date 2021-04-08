var config = require("./config"),
    mongoose = require("mongoose");

module.exports = function() {
    var db = mongoose.connect(config.mongodb.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    require("../app/models/category.server.model");
    require("../app/models/section.server.model");

    return db;
}
