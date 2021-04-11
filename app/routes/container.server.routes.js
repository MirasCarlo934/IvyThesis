var containers = require("../../app/controllers/container.server.controller");

module.exports = function(app) {
    app.route("/containers")
        .post(containers.create)
        .get(containers.list);

    app.route("/containers/:containerOrder")
        .get(containers.read)
        .put(containers.update)
        .delete(containers.delete);

    app.param("containerOrder", containers.containerByOrder);
}
