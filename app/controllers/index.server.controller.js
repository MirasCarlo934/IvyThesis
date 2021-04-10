var config = require("../../config/config")

exports.render = function(req, res) {
    res.render("index", {
        title: "Hello World",
        api: config.api
    });
};
