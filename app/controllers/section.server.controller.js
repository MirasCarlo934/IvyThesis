var Section = require("mongoose").model("Section");

// CRUD FUNCTIONS

exports.create = function(req, res, next) {
    var category = new Section(req.body);
    Section.exists({
        order: req.body.order
    }, function(err, exists) {

        if (err) {
            return next(err);
        } else {
            if (exists) {
                res.status(400).json({
                    errmsg: "A section already exists at specified order"
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
    Section.find({})
        .sort("order")
        .exec(function(err, sections) {
            if (err) {
                return next(err);
            } else {
                res.json(sections);
            }
    });
};

exports.read = function(req, res, next) {
    res.json(req.section);
}

exports.update = function(req, res, next) {
    Section.updateOne({
        order: req.section.order
    }, req.body, function(err, category) {
        if (err) {
            return next(err);
        } else {
            res.json(category);
        }
    });
}

// PATH PARAMETER FUNCTIONS

exports.sectionByOrder = function(req, res, next, order) {
    Section.findOne({
        order: order
    }, function(err, section) {
        if (err) {
            return next(err);
        } else {
            req.section = section;
            next();
        }
    });
};
