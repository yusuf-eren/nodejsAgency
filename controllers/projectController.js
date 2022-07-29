const Project = require("../models/Project");
const mongoose = require("mongoose");

exports.createProject = async (req, res) => {
  await Project.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    target: req.body.target,
  });
  res.status(201).redirect("/");
};

exports.editProject = async (req, res) => {
  Project.findByIdAndUpdate(
    { _id: req.body._id },
    {
      name: req.body.edited_name,
      description: req.body.edited_description,
      category: req.body.edited_category,
      target: req.body.edited_target,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.redirect('/')
      }
    }
  );
};

exports.deleteProject = async (req,res) => {
  await Project.findByIdAndDelete({_id:req.body._id}).catch(err=>console.log(err))
  res.redirect('/')
}
