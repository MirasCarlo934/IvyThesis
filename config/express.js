var express = require("express"),
    morgan = require("morgan"),
    compress = require("compression"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === "development") {
        app.use(morgan("dev"));
    } else if (process.env.NODE_ENV === "production") {
        app.use(compress())
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    require("../app/routes/index.server.routes.js")(app);
    require("../app/routes/category.server.routes.js")(app);
    require("../app/routes/section.server.routes.js")(app);
    require("../app/routes/list.server.routes.js")(app);
    require("../app/routes/card.server.routes.js")(app);
    require("../app/routes/container.server.routes")(app);

    app.use(express.static("./public"));

    return app;
}
