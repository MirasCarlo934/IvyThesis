var mongoose = require("mongoose");
    Schema = mongoose.Schema;

var SectionSchema = new Schema({
    name: String,
    description: String,
    order: {
        type: Number,
        min: 0
    },
    categoryId: String
});

mongoose.model("Section", SectionSchema);
