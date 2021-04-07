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

exports.read = function(req, res, next) {
    res.json(req.category);
}

exports.categoryByOrder = function(req, res, next, order) {
    Category.findOne({
        order: order
    }, function(err, category) {
        if (err) {
            return next(err);
        } else {
            req.category = category;
            next();
        }
    });
};
