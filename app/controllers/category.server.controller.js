var Category = require("mongoose").model("Category");

// CRUD FUNCTIONS

exports.create = function(req, res, next) {
    var category = new Category(req.body);
    Category.exists({
        order: req.body.order
    }, function(err, exists) {

        if (err) {
            return next(err);
        } else {
            if (exists) {
                res.status(400).json({
                    errmsg: "A category already exists at specified order"
                });
            } else {
                category.save(function(err) {
                    if (err) {
                        return next(err);
                    } else {
                        res.json(category);
                    }
                });
            }
        }

    });
};

exports.list = function(req, res, next) {
    Category.find({})
        .sort("order")
        .exec(function(err, categories) {
            if (err) {
                return next(err);
            } else {
                res.json(categories);
            }
    });
};

exports.read = function(req, res, next) {
    res.json(req.category);
};

exports.update = function(req, res, next) {
    if(req.category === null) {
        let category = new Category(req.body);
        category.save(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(category);
            }
        });
    } else {
        Category.findOneAndUpdate({
            order: req.category.order
        }, req.body, function (err, category) {
            if (err) {
                return next(err);
            } else {
                res.json(category);
            }
        });
    }
};

exports.delete = function(req, res, next) {
    req.category.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            return res.json(req.category);
        }
    });
};

// PATH PARAMETER FUNCTIONS

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
