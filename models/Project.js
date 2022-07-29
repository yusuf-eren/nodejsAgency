const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);

const ProjectSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  target: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;