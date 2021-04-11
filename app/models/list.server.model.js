var mongoose = require("mongoose");
    Schema = mongoose.Schema;

var ListSchema = new Schema({
    name: String,
    description: String,
    order: {
        type: Number,
        min: 0
    },
    sectionId: String,
    categoryId: String,
    parentId: String
});

mongoose.model("List", ListSchema);
