var mongoose = require("mongoose");
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    id: String,
    name: String,
    description: String
});

mongoose.model("Category", "CategorySchema");
