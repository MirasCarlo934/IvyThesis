var sections = require("../../app/controllers/section.server.controller");

module.exports = function(app) {
    app.route("/sections")
        .post(sections.create)
        .get(sections.list);

    app.route("/sections/:sectionOrder")
        .get(sections.read)
        .put(sections.update)
        .delete(sections.delete);

    app.param("sectionOrder", sections.sectionByOrder);
}
