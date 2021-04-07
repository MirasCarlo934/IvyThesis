var Category = require("mongoose").model("Category");

exports.create = function(req, res, next) {
    var category = new Category(req.body);
    category.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(category);
        }
    });
};
