var config = require("../../config/config")

exports.render = function(req, res) {
    if (!req.query.env) {
        req.query.env = "production";
    }
    res.render("index", {
        env: req.query.env,
        title: "Hello World",
        api: config.api
    });
};
